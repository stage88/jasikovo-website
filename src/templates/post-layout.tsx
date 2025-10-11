/** @jsxImportSource @emotion/react */
'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import * as _ from 'lodash';
import { lighten, setLightness } from 'polished';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Footer } from '@/components/Footer';
import SiteNav, { SiteNavMain } from '@/components/header/SiteNav';
import PostContent from '@/components/PostContent';
import { ReadNext } from '@/components/ReadNext';
import { Subscribe } from '@/components/subscribe/Subscribe';
import { Wrapper } from '@/components/Wrapper';
import { AuthorList } from '@/components/AuthorList';
import type { PostDetail, PostSummary } from '@/lib/posts';
import { getSiteConfig } from '@/lib/utils';
import { colors } from '@/styles/colors';
import { inner, outer, SiteMain } from '@/styles/shared';

const siteConfig = getSiteConfig();

export const PostFull = css`
  position: relative;
  z-index: 50;
`;

export const NavPost = css`
  @media (max-width: 980px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  position: relative;
  margin: 0 auto;
  padding: 70px 0 50px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  @media (max-width: 1170px) {
    padding: 60px 6vw 50px;
  }

  @media (max-width: 800px) {
    padding-right: 5vw;
    padding-left: 5vw;
  }

  @media (max-width: 500px) {
    padding: 20px 0 35px;
  }
`;

const PostFullTags = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 1.3rem;
  line-height: 1.4em;
  font-weight: 600;
  text-transform: uppercase;
`;

const PostFullCustomExcerpt = styled.p`
  margin: 20px 0 0;
  color: var(--midgrey);
  font-family: Georgia, serif;
  font-size: 2.3rem;
  line-height: 1.4em;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 1.9rem;
    line-height: 1.5em;
  }

  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten(0.1, colors.midgrey)};
  }
`;

const PostFullByline = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0 0;
  padding-top: 15px;
  /* border-top: 1px solid color(var(--lightgrey) l(+10%)); */
  border-top: 1px solid ${lighten(0.1, colors.lightgrey)};

  .post-full-byline-content {
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
  }

  .post-full-byline-content .author-list {
    justify-content: flex-start;
    padding: 0 12px 0 0;
  }

  .post-full-byline-meta {
    margin: 2px 0 0;
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten(0.1, colors.midgrey)};
    font-size: 1.2rem;
    line-height: 1.2em;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }

  .post-full-byline-meta h4 {
    margin: 0 0 3px;
    font-size: 1.3rem;
    line-height: 1.4em;
    font-weight: 500;
  }

  .post-full-byline-meta h4 a {
    /* color: color(var(--darkgrey) l(+10%)); */
    color: ${lighten(0.1, colors.darkgrey)};
  }

  .post-full-byline-meta h4 a:hover {
    /* color: var(--darkgrey); */
    color: ${colors.darkgrey};
  }

  .post-full-byline-meta .bull {
    display: inline-block;
    margin: 0 4px;
    opacity: 0.6;
  }

  @media (prefers-color-scheme: dark) {
    /* border-top-color: color(var(--darkmode) l(+15%)); */
    border-top-color: ${lighten(0.15, colors.darkmode)};

    .post-full-byline-meta h4 a {
      color: rgba(255, 255, 255, 0.75);
    }

    .post-full-byline-meta h4 a:hover {
      color: #fff;
    }
  }
`;

export const PostFullTitle = styled.h1`
  margin: 0 0 0.2em;
  color: ${setLightness(0.05, colors.darkgrey)};
  @media (max-width: 500px) {
    margin-top: 0.2em;
    font-size: 3.3rem;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`;

interface PostLayoutProps {
  post: PostDetail;
  relatedPosts: PostSummary[];
  previous?: PostSummary;
  next?: PostSummary;
}

export const PostLayout: React.FC<PostLayoutProps> = ({
  post,
  relatedPosts,
  previous,
  next,
}) => {
  const date = new Date(post.date);
  const datetime = format(date, 'yyyy-MM-dd');
  const displayDatetime = format(date, 'dd LLL yyyy');

  return (
    <Wrapper>
      <header className='site-header'>
        <div css={[outer, SiteNavMain]}>
          <div css={[NavPost, inner]}>
            <SiteNav isPost post={post} />
          </div>
        </div>
      </header>
      <main id='site-main' className='site-main' css={[SiteMain, outer]}>
        <div css={inner}>
          <article css={[PostFull, NoImage]}>
            <PostFullHeader className='post-full-header'>
              <PostFullTags className='post-full-tags'>
                {post.tags && post.tags.length > 0 && (
                  <Link href={`/tags/${_.kebabCase(post.tags[0])}/`}>
                    {post.tags[0]}
                  </Link>
                )}
              </PostFullTags>
              <PostFullTitle className='post-full-title'>
                {post.title}
              </PostFullTitle>
              <PostFullCustomExcerpt className='post-full-custom-excerpt'>
                {post.excerpt}
              </PostFullCustomExcerpt>
              <PostFullByline className='post-full-byline'>
                <section className='post-full-byline-content'>
                  <AuthorList authors={post.authors} tooltip='large' />
                  <section className='post-full-byline-meta'>
                    <h4 className='author-name'>
                      {post.authors.map(author => (
                        <Link
                          key={author.slug}
                          href={`/author/${author.slug}/`}>
                          {author.name}
                        </Link>
                      ))}
                    </h4>
                    <div className='byline-meta-content'>
                      <time className='byline-meta-date' dateTime={datetime}>
                        {displayDatetime}
                      </time>
                    </div>
                  </section>
                </section>
              </PostFullByline>
            </PostFullHeader>
            <PostContent html={post.html} />

            {siteConfig.showSubscribe && <Subscribe title={siteConfig.title} />}
          </article>
        </div>
      </main>

      <ReadNext
        currentPageId={post.id}
        tags={post.tags}
        relatedPosts={relatedPosts}
        previous={previous}
        next={next}
      />

      <Footer />
    </Wrapper>
  );
};
