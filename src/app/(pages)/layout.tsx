/** @jsxImportSource @emotion/react */
'use client';

import React from 'react';
import { css } from '@emotion/react';

import { Footer } from '@/components/Footer';
import SiteNav from '@/components/header/SiteNav';
import { Wrapper } from '@/components/Wrapper';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '@/styles/shared';
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
