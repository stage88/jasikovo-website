import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getAllAuthorSlugs,
  getAuthorProfileBySlug,
  getPostsByAuthorSlug,
} from '@/lib/posts';
import {
  getPageMetaData,
  getSiteConfig,
  resolveSiteAssetPath,
} from '@/lib/utils';
import AuthorTemplate from '@/templates/author';

interface AuthorPageParams {
  slug: string;
}

interface PageProps {
  params: Promise<AuthorPageParams>;
}

export function generateStaticParams() {
  const slugs = getAllAuthorSlugs();
  return slugs.map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const siteConfig = getSiteConfig();
  const author = getAuthorProfileBySlug(slug);

  if (!author) {
    return getPageMetaData();
  }

  const description =
    author.bio ?? `Articles by ${author.name} on ${siteConfig.title}.`;
  const canonicalUrl = new URL(
    `/author/${author.slug}/`,
    siteConfig.siteUrl
  ).toString();

  const primaryImage = resolveSiteAssetPath(
    author.profileImage ?? author.avatar ?? undefined
  );

  return getPageMetaData({
    title: author.name,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'profile',
      title: author.name,
      description,
      url: canonicalUrl,
      images: primaryImage ? [{ url: primaryImage }] : undefined,
    },
    twitter: {
      card: 'summary',
      title: author.name,
      description,
      images: primaryImage ? [primaryImage] : undefined,
    },
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;

  const author = getAuthorProfileBySlug(slug);
  if (!author) {
    notFound();
  }

  const posts = getPostsByAuthorSlug(slug);
  return <AuthorTemplate author={author} posts={posts} />;
}
