/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { darken } from 'polished';

import { PostSummary } from '@/lib/posts';
import { colors } from '@/lib/styles/colors';
import { inner, outer } from '@/lib/styles/shared';
import { PostCard } from './post-card';
import { ReadNextCard } from './read-next-card';

const ReadNextAside = styled.aside`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* background: color(var(--darkgrey) l(-5%)); */
  background: ${darken(0.05, colors.darkgrey)};

  .post-card {
    padding-bottom: 0;
    border-bottom: none;
  }
  .post-card:after {
    display: none;
  }
  .post-card-primary-tag {
    color: #fff;
    opacity: 0.6;
  }
  .post-card-title {
    color: #fff;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
  .post-card:hover .post-card-image {
    opacity: 1;
  }
  .post-card-excerpt,
  .post-card-excerpt-link {
    color: rgba(255, 255, 255, 0.6);
  }
  .static-avatar {
    border-color: #000;
  }
  .post-card-byline-content {
    color: rgba(255, 255, 255, 0.6);
  }
  .post-card-byline-content a {
    color: rgba(255, 255, 255, 0.8);
  }
  .author-avatar {
    border-color: ${darken(0.05, colors.darkgrey)};
  }
  .author-profile-image {
    background: ${darken(0.05, colors.darkgrey)};
  }

  @media (max-width: 650px) {
    .post-card {
      flex: 1 1 auto;
      margin: 25px;
      padding: 25px 0 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const ReadNextFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -25px;
  padding: 60px 0 0 0;
`;

interface ReadNextProps {
  tags: string[];
  currentPageId: string;
  relatedPosts: PostSummary[];
  previous?: PostSummary;
  next?: PostSummary;
}

export const ReadNext = ({
  relatedPosts,
  currentPageId,
  tags,
  previous,
  next,
}: ReadNextProps) => {
  const showRelatedPosts = relatedPosts.length > 0;

  return (
    <ReadNextAside className='read-next' css={outer}>
      <div css={inner}>
        <ReadNextFeed className='read-next-feed'>
          {showRelatedPosts && (
            <ReadNextCard
              currentPageId={currentPageId}
              tags={tags}
              relatedPosts={relatedPosts}
            />
          )}
          {previous && <PostCard post={previous} />}
          {next && <PostCard post={next} />}
        </ReadNextFeed>
      </div>
    </ReadNextAside>
  );
};
