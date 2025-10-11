/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

import { Footer } from '@/components/Footer';
import SiteNav from '@/components/header/SiteNav';
import { PostFullContent } from '@/components/PostContent';
import { Wrapper } from '@/components/Wrapper';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '@/styles/shared';
import {
  NoImage,
  PostFull,
  PostFullHeader,
  PostFullTitle,
} from '@/templates/post-layout';
import { colors } from '@/styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
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
