/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

import { Footer } from '@/components/Footer';
import SiteNav from '@/components/header/SiteNav';
import { PostCard } from '@/components/PostCard';
import { Wrapper } from '@/components/Wrapper';
import { PostSummary, TagSummary } from '@/lib/posts';
import {
  inner,
  outer,
  PostFeed,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteNavMain,
  SiteArchiveHeader,
  ResponsiveHeaderBackground,
  SiteHeaderBackground,
} from '@/styles/shared';

interface TagTemplateProps {
  tag: TagSummary;
  posts: PostSummary[];
}

const TagDescriptionFallback = css`
  display: block;
`;

const Tags: React.FC<TagTemplateProps> = ({ tag, posts }) => {
  const totalCount = posts.length;

  return (
    <Wrapper>
      <header
        className='site-archive-header'
        css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
        <ResponsiveHeaderBackground
          css={[outer, SiteHeaderBackground]}
          backgroundImage={tag.image ?? undefined}
          className='site-header-background'>
          <SiteHeaderContent css={inner} className='site-header-content'>
            <SiteTitle className='site-title'>{tag.name}</SiteTitle>
            <SiteDescription className='site-description'>
              {tag.description ? (
                tag.description
              ) : (
                <span css={TagDescriptionFallback}>
                  A collection of {totalCount > 1 && `${totalCount} posts`}
                  {totalCount === 1 && '1 post'}
                  {totalCount === 0 && 'No posts'}
                </span>
              )}
            </SiteDescription>
          </SiteHeaderContent>
        </ResponsiveHeaderBackground>
      </header>
      <main id='site-main' css={[SiteMain, outer]}>
        <div css={inner}>
          <div css={PostFeed}>
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default Tags;
