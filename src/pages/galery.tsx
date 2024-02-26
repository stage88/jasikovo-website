import React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';

import Page from '../templates/page';
import { albums } from '../content/albums';
import { shared } from '../content/shared';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px dotted #aaa;
  margin-bottom: 3rem;

  img {
    margin: 1rem auto 4rem auto;
    min-width: 160px;
  }
`;

const ImageContent = styled.div`
  display: flex;
  margin-right: 3rem;
`;

const Description = styled.div`
  display: flex;
`;

const MetaContent = styled.div`
  font-size: 1.5rem;
`;

const Galery: React.FC = () => {
  const list = _.sortBy(albums, x => parseInt(x.sort));
  return (
    <Page title="Galery - Galerija">
      <>
        {list.map((album, i) => {
          const image = shared.find(
            photo =>
              photo.title?.trim().replace(new RegExp(' ', 'g'), '') ===
              album.title?.trim().replace(new RegExp(' ', 'g'), ''),
          )?.coverPhotoBaseUrl;
          if (!image) {
            console.error('No cover photo for album:', album.title);
          }
          return (
            <Row key={i}>
              <ImageContent>
                <div>
                  <a href={album.url} title={album.title} target='_blank'>
                    <img title={album.title} src={image} style={{ width: 320 }} />
                  </a>
                </div>
              </ImageContent>
              <Description>
                <div>
                  <div>
                    <a href={album.url} target='_blank'>{album.title}</a>
                  </div>
                  <MetaContent>
                    <div>Number of Photos in Album: {album.count}</div>
                  </MetaContent>
                </div>
              </Description>
            </Row>
          );
        })}
      </>
    </Page>
  );
};

export default Galery;
