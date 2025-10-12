import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostLayout } from '@/templates/post-layout';
import {
  getAdjacentPosts,
  getAllPostRouteParams,
  getPostData,
  getPostIdFromRouteParams,
  getRelatedPosts,
  type PostRouteParams,
} from '@/lib/posts';
import { getPageMetaData } from '@/lib/utils';

export async function generateStaticParams() {
  return getAllPostRouteParams().map(({ year, month, slug }) => ({
    slug: year,
    month,
    post: slug,
  }));
}

interface RouteParams {
  slug: string;
  month: string;
  post: string;
}

export default async function PostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug, month, post } = await params;
  const routeParams: PostRouteParams = {
    year: slug,
    month,
    slug: post,
  };

  const postId = getPostIdFromRouteParams(routeParams);

  let postData:
    | Awaited<ReturnType<typeof getPostData>>
    | undefined;
  try {
    postData = await getPostData(postId);
  } catch (_error) {
    notFound();
  }

  if (!postData) {
    notFound();
  }
  const relatedPosts = getRelatedPosts(postData.id, postData.tags);
  const { previous, next } = getAdjacentPosts(postData.id);

  return (
    <PostLayout
      post={postData}
      relatedPosts={relatedPosts}
      previous={previous}
      next={next}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug, month, post } = await params;
  const routeParams: PostRouteParams = {
    year: slug,
    month,
    slug: post,
  };

  const postId = getPostIdFromRouteParams(routeParams);
  let postData:
    | Awaited<ReturnType<typeof getPostData>>
    | undefined;
  try {
    postData = await getPostData(postId);
  } catch (_error) {
    notFound();
  }

  if (!postData) {
    notFound();
  }

  return getPageMetaData({
    title: postData.title,
    description: postData.excerpt,
  });
}
