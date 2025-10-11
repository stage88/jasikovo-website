import React from 'react';

import styled from '@emotion/styled';

import { AuthorProfile } from '@/lib/posts';
import { AuthorListItem } from './AuthorListItem';

interface AuthorListProps {
  tooltip: 'small' | 'large';
  authors: AuthorProfile[];
}

export const AuthorList: React.FC<AuthorListProps> = props => (
  <AuthorListUl className='author-list'>
    {props.authors.map(author => (
      <AuthorListItem
        key={author.slug}
        author={author}
        tooltip={props.tooltip}
      />
    ))}
  </AuthorListUl>
);

export const AuthorListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 4px;
  padding: 0;
  list-style: none;
`;
