/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import React from 'react';

import { Footer } from '@/components/footer';
import SiteNav from '@/components/header/site-nav';
import Pagination from '@/components/pagination';
import { PostCard } from '@/components/post-card';
import { Wrapper } from '@/components/wrapper';
import type { PostSummary } from '@/lib/posts';
import { getSiteConfig } from '@/lib/utils';
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteHeaderStyles,
  SiteMain,
  SiteTitle,
} from '@/styles/shared';

const siteConfig = getSiteConfig();

interface IndexTemplateProps {
  posts: PostSummary[];
  currentPage: number;
  numPages: number;
  heroImage?: string;
  children?: React.ReactNode;
}

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

export { HomePosts };

const IndexTemplate: React.FC<IndexTemplateProps> = ({
  posts,
  currentPage,
  numPages,
  heroImage,
  children,
}) => {
  return (
    <Wrapper css={HomePosts}>
      <div
        css={[outer, SiteHeader, SiteHeaderStyles]}
        className='site-header-background'
        style={
          heroImage ? { backgroundImage: `url('${heroImage}')` } : undefined
        }>
        <div css={inner}>
          <SiteNav isHome />
          <SiteHeaderContent className='site-header-content'>
            <SiteTitle className='site-title'>{siteConfig.title}</SiteTitle>
            <SiteDescription>{siteConfig.tagline}</SiteDescription>
          </SiteHeaderContent>
        </div>
      </div>
      <main id='site-main' css={[SiteMain, outer]}>
        <div css={[inner, Posts]}>
          <div css={PostFeed}>
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} large={index === 0} />
            ))}
          </div>
        </div>
      </main>
      {children}
      {numPages > 1 && (
        <Pagination currentPage={currentPage} numPages={numPages} />
      )}
      <Footer />
    </Wrapper>
  );
};

export default IndexTemplate;
