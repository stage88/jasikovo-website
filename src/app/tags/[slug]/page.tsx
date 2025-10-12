import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { kebabCase } from 'lodash';

import {
  getAllTagSummaries,
  getPostsByTag,
  getSortedPostsData,
  getTagSummary,
  getTagSummaryBySlug,
  TagSummary,
} from '@/lib/posts';
import {
  getPageMetaData,
  getSiteConfig,
  resolveSiteAssetPath,
} from '@/lib/utils';
import TagsTemplate from '@/templates/tags';

interface TagPageParams {
  slug: string;
}

interface PageProps {
  params: Promise<TagPageParams>;
}

function resolveTagBySlug(slug: string): TagSummary | undefined {
  const tagFromConfig = getTagSummaryBySlug(slug);
  if (tagFromConfig) {
    return tagFromConfig;
  }

  // Fall back to tags defined on posts if they are not present in tag.yaml.
  const posts = getSortedPostsData();
  for (const post of posts) {
    const matchedTag = post.tags.find(tag => kebabCase(tag) === slug);
    if (matchedTag) {
      return getTagSummary(matchedTag);
    }
  }

  return undefined;
}

export function generateStaticParams() {
  const tagSlugs = new Set<string>();

  getAllTagSummaries().forEach(tag => {
    if (tag.slug) {
      tagSlugs.add(tag.slug);
    }
  });

  const posts = getSortedPostsData();
  posts.forEach(post => {
    post.tags.forEach(tag => {
      const slug = kebabCase(tag);
      if (slug) {
        tagSlugs.add(slug);
      }
    });
  });

  return Array.from(tagSlugs).map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const siteConfig = getSiteConfig();
  const tag = resolveTagBySlug(slug);

  if (!tag) {
    return getPageMetaData();
  }

  const description =
    tag.description ??
    `A collection of posts tagged "${tag.name}" on ${siteConfig.title}.`;
  const canonicalUrl = new URL(`/tags/${tag.slug}/`, siteConfig.siteUrl);
  const primaryImage = resolveSiteAssetPath(tag.image ?? undefined);

  return getPageMetaData({
    title: tag.name,
    description,
    alternates: {
      canonical: canonicalUrl.toString(),
    },
    openGraph: {
      type: 'website',
      title: tag.name,
      description,
      url: canonicalUrl.toString(),
      images: primaryImage ? [{ url: primaryImage }] : undefined,
    },
    twitter: {
      card: primaryImage ? 'summary_large_image' : 'summary',
      title: tag.name,
      description,
      images: primaryImage ? [primaryImage] : undefined,
    },
  });
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = resolveTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTag(tag.name);
  return <TagsTemplate tag={tag} posts={posts} />;
}
