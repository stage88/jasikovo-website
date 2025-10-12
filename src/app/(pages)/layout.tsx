/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import React from 'react';

import { Footer } from '@/lib/components/footer';
import SiteNav from '@/lib/components/header/site-nav';
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

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
        <div css={inner}>{children}</div>
      </main>
      <Footer />
    </Wrapper>
  );
}
