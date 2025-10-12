import { getPaginatedPosts } from '@/lib/posts';
import {
  getPageMetaData,
  getSiteConfig,
  resolveSiteAssetPath,
} from '@/lib/utils';
import IndexTemplate from '@/templates/index';

const siteConfig = getSiteConfig();

export const metadata = getPageMetaData();

function resolveHeroImage(): string | undefined {
  const { coverImage } = siteConfig;
  if (!coverImage) {
    return undefined;
  }
  return resolveSiteAssetPath(coverImage);
}

export default function HomePage() {
  const { posts, totalPages } = getPaginatedPosts(1);
  const heroImage = resolveHeroImage();

  return (
    <IndexTemplate
      posts={posts}
      currentPage={1}
      numPages={totalPages}
      heroImage={heroImage}
    />
  );
}
