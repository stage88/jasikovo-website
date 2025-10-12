/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import _ from 'lodash';
import Link from 'next/link';
import { lighten } from 'polished';
import React from 'react';

import { PostSummary } from '@/lib/posts';
import { colors } from '@/styles/colors';
import { AuthorList } from './author-list';

const PostCardStyles = css`
  position: relative;
  flex: 1 1 301px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px;
  padding: 0 20px 40px;
  min-height: 220px;
  background-size: cover;

  &.no-image .post-card-content {
    padding-top: 0;
  }

  &:not(.no-image) {
    .post-card-content {
      padding-top: 25px;
    }

    &:hover .post-card-image {
      transform: scale(1.04);
      opacity: 0.95;
    }
  }
`;

const PostCardLarge = css`
  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding-bottom: 40px;
    min-height: 280px;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-header {
      padding-left: 40px;
    }

    .post-card-excerpt p {
      margin-bottom: 1.5em;
      padding-left: 40px;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 3px;

  @media (prefers-color-scheme: dark) {
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const PostCardImage = css`
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  transition:
    transform 0.35s ease-in-out,
    opacity 0.35s ease-in-out;

  @media (min-width: 795px) {
    height: 240px;
  }
`;

const PostCardContentLink = css`
  position: relative;
  display: block;
  color: ${colors.darkgrey};
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`;

const PostCardPrimaryTag = styled.div`
  margin: 0 0 0.2em;
  /* color: var(--blue); */
  color: ${colors.blue};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const PostCardTitle = styled.h2`
  margin: 0 0 0.4em;
  line-height: 1.15em;
  transition: color 0.2s ease-in-out;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`;

const PostCardExcerpt = styled.section`
  font-family: Georgia, serif;

  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten(0.1, colors.midgrey)} !important;
  }
`;

const PostCardMeta = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 0;
`;

const PostCardBylineContent = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  margin: 4px 0 0 10px;
  /* color: color(var(--midgrey) l(+10%)); */
  color: ${lighten(0.1, colors.midgrey)};
  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  span {
    margin: 0;
  }

  a {
    /* color: color(var(--darkgrey) l(+20%)); */
    color: ${lighten(0.2, colors.darkgrey)};
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const PostCardHeader = styled.header`
  margin: 15px 0 0;
`;

export const StaticAvatar = css`
  display: block;
  overflow: hidden;
  margin: 0 0 0 -6px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;

  @media (prefers-color-scheme: dark) {
    /* border-color: color(var(--darkgrey) l(+2%)); */
    border-color: ${lighten(0.02, colors.darkgrey)};
  }
`;

export const AuthorProfileImage = css`
  display: block;
  width: 100%;
  height: 100%;
  /* background: color(var(--lightgrey) l(+10%)); */
  background: ${lighten(0.1, colors.lightgrey)};
  border-radius: 100%;
  object-fit: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

export interface PostCardProps {
  post: PostSummary;
  large?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, large = false }) => {
  const date = new Date(post.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(date, 'dd LLL yyyy');
  const postHref = `/${post.slug}/`;
  const hasImage = Boolean(post.image);
  const articleClassName = [
    'post-card',
    hasImage ? '' : 'no-image',
    large ? 'post-card-large' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article
      className={articleClassName}
      css={[PostCardStyles, large && PostCardLarge]}>
      {hasImage && (
        <Link
          className='post-card-image-link'
          css={PostCardImageLink}
          href={postHref}
          aria-label={post.title}>
          <div
            className='post-card-image'
            css={PostCardImage}
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        </Link>
      )}
      <PostCardContent className='post-card-content'>
        <PostCardHeader className='post-card-header'>
          {post.tags && (
            <PostCardPrimaryTag className='post-card-primary-tag'>
              <Link href={`/tags/${_.kebabCase(post.tags[0])}/`}>
                {post.tags[0]}
              </Link>
            </PostCardPrimaryTag>
          )}
          <Link
            className='post-card-title-link'
            css={PostCardContentLink}
            href={postHref}>
            <PostCardTitle className='post-card-title'>
              {post.title}
            </PostCardTitle>
          </Link>
        </PostCardHeader>
        <PostCardExcerpt className='post-card-excerpt'>
          <Link
            className='post-card-excerpt-link'
            css={PostCardContentLink}
            href={postHref}>
            <p>{post.excerpt}</p>
          </Link>
        </PostCardExcerpt>
        <PostCardMeta className='post-card-meta'>
          <AuthorList authors={post.authors} tooltip='small' />
          <PostCardBylineContent className='post-card-byline-content'>
            <span>
              {post.authors.map((author, index) => {
                return (
                  <React.Fragment key={author.slug}>
                    <Link href={`/author/${author.slug}/`}>{author.name}</Link>
                    {post.authors.length - 1 > index && ', '}
                  </React.Fragment>
                );
              })}
            </span>
            <span className='post-card-byline-date'>
              <time dateTime={datetime}>{displayDatetime}</time>
            </span>
          </PostCardBylineContent>
        </PostCardMeta>
      </PostCardContent>
    </article>
  );
};
