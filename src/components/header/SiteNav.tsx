/** @jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { darken } from 'polished';
import React, { useState, useEffect, useRef } from 'react';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { SocialLink, SocialLinkFb } from '@/styles/shared';
import { getSiteConfig } from '@/lib/utils';
import { Facebook } from '../icons/facebook';
import { Twitter } from '../icons/twitter';
import { Hamburger } from '../icons/hamburger';
import { Close } from '../icons/close';
import { SubscribeModal } from '../subscribe/SubscribeModal';
import { SiteNavLogo } from './SiteNavLogo';

const siteConfig = getSiteConfig();

interface SiteNavProps {
  isHome?: boolean;
  isPost?: boolean;
  post?: any;
}

const MenuItems: React.FC<{ styles: SerializedStyles }> = ({ styles }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <ul css={styles} role='menu'>
      <li role='menuitem'>
        <Link href='/' className={isActive('/') ? 'nav-current' : ''}>
          Home
        </Link>
      </li>
      <li role='menuitem'>
        <Link
          href='/history'
          className={isActive('/history') ? 'nav-current' : ''}>
          History
        </Link>
      </li>
      <li role='menuitem'>
        <Link
          href='/galery'
          className={isActive('/galery') ? 'nav-current' : ''}>
          Galery
        </Link>
      </li>
      <li role='menuitem'>
        <Link
          href='/videos'
          className={isActive('/videos') ? 'nav-current' : ''}>
          Videos
        </Link>
      </li>
      <li role='menuitem'>
        <Link
          href='/where-is-jasikovo'
          className={isActive('/where-is-jasikovo') ? 'nav-current' : ''}>
          Where Is Jasikovo
        </Link>
      </li>
      <li role='menuitem'>
        <Link
          href='/family-tree'
          className={isActive('/family-tree') ? 'nav-current' : ''}>
          Family Tree
        </Link>
      </li>
      <li role='menuitem'>
        <Link href='/about' className={isActive('/about') ? 'nav-current' : ''}>
          About
        </Link>
      </li>
    </ul>
  );
};

const SocialLinkItems: React.FC = () => (
  <>
    {siteConfig.facebook && (
      <a
        className='social-link social-link-fb'
        css={[SocialLink, SocialLinkFb]}
        href={siteConfig.facebook}
        target='_blank'
        title='Facebook'
        rel='noopener noreferrer'>
        <Facebook />
      </a>
    )}
    {siteConfig.twitter && (
      <a
        className='social-link social-link-twitter'
        css={SocialLink}
        href={siteConfig.twitter}
        title='Twitter'
        target='_blank'
        rel='noopener noreferrer'>
        <Twitter />
      </a>
    )}
  </>
);

const SiteNav: React.FC<SiteNavProps> = ({ isPost = false, post = {} }) => {
  const subscribe = useRef<SubscribeModal>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openModal = () => {
    if (subscribe.current) {
      subscribe.current.open();
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    };

    const update = () => {
      if (!titleRef.current) {
        return;
      }

      lastScrollY = window.scrollY;

      const trigger = titleRef.current.getBoundingClientRect().top;
      const triggerOffset = titleRef.current.offsetHeight + 35;

      // show/hide post title
      if (lastScrollY >= trigger + triggerOffset) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }

      ticking = false;
    };

    if (isPost) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isPost]);

  return (
    <>
      {siteConfig.showSubscribe && <SubscribeModal ref={subscribe} />}
      <nav css={SiteNavStyles}>
        <SiteNavLeft className='site-nav-left'>
          <SiteNavLogo />
          <SiteNavContent css={[showTitle ? HideNav : '']}>
            <MenuItems styles={NavStyles} />
            {isPost && (
              <NavPostTitle ref={titleRef} className='nav-post-title'>
                {post.title}
              </NavPostTitle>
            )}
          </SiteNavContent>
        </SiteNavLeft>
        <SiteNavRight>
          <HamburgerMenu>
            <a
              css={HamburgerIcon}
              onClick={() => {
                setMenuOpen(!isMenuOpen);
              }}>
              <Hamburger />
            </a>
          </HamburgerMenu>
          <SocialLinks>
            <SocialLinkItems />
          </SocialLinks>
          {siteConfig.showSubscribe && (
            <SubscribeButton onClick={openModal}>Subscribe</SubscribeButton>
          )}
        </SiteNavRight>

        {isMenuOpen && (
          <SiteNavOverlay>
            <div className='top-content'>
              <SiteNavLogo />
              <a
                className='close'
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}>
                <Close />
              </a>
            </div>
            <SiteNavContent>
              <MenuItems styles={NavStylesOverlay} />
              <SocialLinkItems />
            </SiteNavContent>
          </SiteNavOverlay>
        )}
      </nav>
    </>
  );
};

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)) */
  background: ${darken('0.05', colors.darkgrey)};

  @media (max-width: 980px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 64px;
  font-size: 1.3rem;
`;

const SiteNavOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 2000;
  background-color: #000;
  padding: 2.5vw 2.5vw 5vw 5vw;

  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-scrolling: touch;

  .top-content {
    display: flex;
    align-self: flex-start;
    width: 100%;
  }

  .site-nav-logo {
    margin-bottom: 1rem;
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;

    img {
      height: 44px;
    }
  }

  .close {
    svg {
      height: 52px;
      width: auto;
    }
  }

  .social-link {
    display: flex;
    padding: 1.5rem 0;

    svg {
      height: 32px;
      width: auto;
    }
  }
`;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding: 10px 0 80px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 980px) {
    margin-right: 0;
    /* padding-left: 5vw; */
  }
`;

const SiteNavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

const NavStyles = css`
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 0.5;
  }

  .nav-current {
    opacity: 1;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const NavStylesOverlay = css`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem -12px;
  padding: 0;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
    font-size: 2rem;
    letter-spacing: 1px;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  .nav-current {
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  height: 64px;
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: 980px) {
    display: none;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  margin: 0 0 0 10px;
  border: #fff 1px solid;
  color: #fff;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const NavPostTitle = styled.span`
  visibility: hidden;
  position: absolute;
  top: 9px;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: none;
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateY(175%);

  .dash {
    left: -25px;
  }

  .dash:before {
    content: '- ';
    opacity: 0.5;
  }
`;

const HideNav = css`
  ul {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-175%);
  }
  .nav-post-title {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

const HamburgerMenu = styled.div`
  padding-top: 1rem;
  /* margin-right: 5vw; */
  @media (min-width: 980px) {
    display: none;
  }
`;

const HamburgerIcon = css`
  /* margin-right: 5vw; */
`;

export default SiteNav;
