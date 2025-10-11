/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import React from 'react';
import styled from '@emotion/styled';

import { getSiteConfig } from '@/lib/utils';

const siteConfig = getSiteConfig();

const SubscribeOverlayLogo = styled(Image)`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

const SubscribeLogo = () => (
  <SubscribeOverlayLogo
    className='subscribe-overlay-logo'
    src='/logo.png'
    width={500}
    height={88}
    alt={siteConfig.title}
  />
);

export default SubscribeLogo;
