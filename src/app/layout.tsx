import React from 'react';

import { getPageMetaData, getSiteConfig } from '@/lib/utils';

import RootStyleRegistry from './emotion';
import { GlobalStylesClient } from './GlobalStylesClient';

const siteConfig = getSiteConfig();

export const metadata = getPageMetaData();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.lang}>
      <body>
        <RootStyleRegistry>
          <GlobalStylesClient />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
