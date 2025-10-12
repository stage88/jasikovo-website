import { notFound } from 'next/navigation';

import type { Metadata } from 'next';
import IndexTemplate from '@/templates/index';
import { getAllPaginationParams, getPaginatedPosts } from '@/lib/posts';
import {
  getPageMetaData,
  getSiteConfig,
  resolveSiteAssetPath,
} from '@/lib/utils';

const PAGE_PREFIX = 'page-';

const siteConfig = getSiteConfig();

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function resolveHeroImage(): string | undefined {
  const { coverImage } = siteConfig;
  if (!coverImage) {
    return undefined;
  }
  return resolveSiteAssetPath(coverImage);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = rawSlug ?? '';

  if (!slug.startsWith(PAGE_PREFIX)) {
    return getPageMetaData({ title: siteConfig.title });
  }

  const pageNumber = Number(slug.slice(PAGE_PREFIX.length));
  if (
    !Number.isFinite(pageNumber) ||
    Number.isNaN(pageNumber) ||
    pageNumber < 2
  ) {
    return getPageMetaData();
  }

  return getPageMetaData({
    title: `Page ${pageNumber}`,
    description: `Browse page ${pageNumber} of articles from ${siteConfig.title}.`,
  });
}

export function generateStaticParams() {
  const pages = getAllPaginationParams().filter(pageNumber => pageNumber > 1);
  return pages.map(pageNumber => ({ slug: `${PAGE_PREFIX}${pageNumber}` }));
}

export default async function PaginatedHomePage({ params }: PageProps) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug ?? '';
  if (!slug.startsWith(PAGE_PREFIX)) {
    notFound();
  }

  const pageNumber = Number(slug.slice(PAGE_PREFIX.length));
  if (
    !Number.isFinite(pageNumber) ||
    pageNumber < 1 ||
    Number.isNaN(pageNumber)
  ) {
    notFound();
  }

  if (pageNumber === 1) {
    notFound();
  }

  const { posts, totalPages } = getPaginatedPosts(pageNumber);

  if (pageNumber > totalPages || posts.length === 0) {
    notFound();
  }

  const heroImage = resolveHeroImage();

  return (
    <IndexTemplate
      posts={posts}
      currentPage={pageNumber}
      numPages={totalPages}
      heroImage={heroImage}
    />
  );
}
