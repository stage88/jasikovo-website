/** @jsxImportSource @emotion/react */

'use client';

import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Footer } from '@/components/Footer';
import SiteNav from '@/components/header/SiteNav';
import { PostCard } from '@/components/PostCard';
import { Wrapper } from '@/components/Wrapper';
import { AuthorProfile, PostSummary } from '@/lib/posts';
import {
  AuthorProfileImage,
  inner,
  outer,
  PostFeed,
  SiteHeader,
  SiteHeaderContent,
  SiteTitle,
  SiteMain,
  SiteArchiveHeader,
  SiteNavMain,
  ResponsiveHeaderBackground,
  SiteHeaderBackground,
} from '@/styles/shared';

interface AuthorTemplateProps {
  author: AuthorProfile;
  posts: PostSummary[];
}

const Author = ({ author, posts }: AuthorTemplateProps) => {
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
          backgroundImage={author.profileImage ?? undefined}
          css={[outer, SiteHeaderBackground]}
          className='site-header-background'>
          <div css={inner}>
            <SiteHeaderContent
              css={AuthorHeader}
              className='site-header-content author-header'>
              {author.avatar && (
                <AuthorAvatar
                  className='author-profile-image'
                  src={author.avatar}
                  alt={author.name}
                  width={110}
                  height={110}
                  unoptimized
                />
              )}
              <AuthHeaderContent className='author-header-content'>
                <SiteTitle className='site-title'>{author.name}</SiteTitle>
                {author.bio && (
                  <AuthorBio className='author-bio'>{author.bio}</AuthorBio>
                )}
                <div css={AuthorMeta} className='author-meta'>
                  {author.location && (
                    <div className='author-location' css={HiddenMobile}>
                      {author.location}
                    </div>
                  )}
                  <div className='author-stats' css={HiddenMobile}>
                    {totalCount > 1 && `${totalCount} posts`}
                    {totalCount === 1 && '1 post'}
                    {totalCount === 0 && 'No posts'}
                  </div>
                  {author.website && (
                    <AuthorSocialLink className='author-social-link'>
                      <AuthorSocialLinkAnchor
                        href={author.website}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Website
                      </AuthorSocialLinkAnchor>
                    </AuthorSocialLink>
                  )}
                  {author.twitter && (
                    <AuthorSocialLink className='author-social-link'>
                      <AuthorSocialLinkAnchor
                        href={`https://twitter.com/${author.twitter.replace(/^@/, '')}`}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Twitter
                      </AuthorSocialLinkAnchor>
                    </AuthorSocialLink>
                  )}
                  {author.facebook && (
                    <AuthorSocialLink className='author-social-link'>
                      <AuthorSocialLinkAnchor
                        href={`https://www.facebook.com/${author.facebook}`}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Facebook
                      </AuthorSocialLinkAnchor>
                    </AuthorSocialLink>
                  )}
                </div>
              </AuthHeaderContent>
            </SiteHeaderContent>
          </div>
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

const HiddenMobile = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const AuthorHeader = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10vw 0 10px;
  align-items: center;

  @media (max-width: 500px) {
    padding: 10px 0 0;

    /* no image */
    padding-bottom: 10px;
  }
`;

const AuthorMeta = css`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 0 0 1px;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  .author-location + .author-stats:before,
  .author-stats + .author-social-link:before,
  .author-social-link + .author-social-link:before {
    content: '•';
    display: inline-block;
    margin: 0 12px;
    color: #fff;
    opacity: 0.6;
  }

  @media (max-width: 500px) {
    margin-top: 8px;
  }

  @media (max-width: 700px) {
    .author-location,
    .author-stats,
    .author-stats + .author-social-link:first-of-type:before {
      display: none;
    }
  }
`;

const AuthorSocialLink = styled.span`
  display: inline-block;
  margin: 0;
  padding: 6px 0;
`;

const AuthorBio = styled.h2`
  z-index: 10;
  flex-shrink: 0;
  margin: 6px 0 0;
  max-width: 46em;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  opacity: 0.8;
`;

const AuthHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0 0 30px;
  @media (max-width: 500px) {
    /* align-items: center; */
    margin: 16px 0 0 0;
  }
`;

// .site-header-content .author-profile-image
const AuthorProfileBioImage = css`
  z-index: 10;
  flex-shrink: 0;
  margin: -4px 2rem 0;
  width: 110px;
  height: 110px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
  border-radius: 100%;
`;

const AuthorAvatar = styled(Image)`
  margin-top: 8px;
  ${AuthorProfileImage};
  ${AuthorProfileBioImage};
`;

const AuthorSocialLinkAnchor = styled.a`
  color: #fff;
  font-weight: 600;

  :hover {
    opacity: 1;
  }
`;

export default Author;
