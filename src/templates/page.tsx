/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import React from 'react';

import { Footer } from '@/lib/components/footer';
import SiteNav from '@/lib/components/header/site-nav';
import { PostFullContent } from '@/lib/components/post-content';
import { Wrapper } from '@/lib/components/wrapper';
import { colors } from '@/lib/styles/colors';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '@/lib/styles/shared';
import {
  NoImage,
  PostFull,
  PostFullHeader,
  PostFullTitle,
} from '@/templates/post';

const PageTemplate = css`
  .site-main {
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageTemplateProps> = ({ title, children }) => (
  <Wrapper css={PageTemplate}>
    <header
      className='site-archive-header no-image'
      css={[SiteHeader, SiteArchiveHeader]}>
      <div css={[outer, SiteNavMain]}>
        <div css={inner}>
          <SiteNav isHome={false} />
        </div>
      </div>
    </header>
    <main id='site-main' className='site-main' css={[SiteMain, outer]}>
      <div css={inner}>
        <article className='post page' css={[PostFull, NoImage]}>
          <PostFullHeader className='post-full-header'>
            <PostFullTitle className='post-full-title'>{title}</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className='post-full-content'>
            <div className='post-content'>{children}</div>
          </PostFullContent>
        </article>
      </div>
    </main>
    <Footer />
  </Wrapper>
);

export default Page;
