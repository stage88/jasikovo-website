/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

import { getSiteConfig } from '@/lib/utils';

const siteConfig = getSiteConfig();

const SiteNavLogoLink = styled(Link)`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 2rem;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;
  align-self: flex-start;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;

export const SiteNavLogo = () => (
  <SiteNavLogoLink className='site-nav-logo' href='/'>
    <Image src='/logo.png' width={500} height={88} alt={siteConfig.title} />
  </SiteNavLogoLink>
);
