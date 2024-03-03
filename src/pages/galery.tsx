import React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';

import Page from '../templates/page';
import { getSharedAlbums } from '../content/shared';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px dotted #aaa;
  margin-bottom: 3rem;
  align-items: flex-start; /* Align items to the top */
`;

const ImageContent = styled.div`
  flex: 0 0 30%; /* Set the base width to 30% and prevent growing or shrinking */
  display: flex;
  align-items: flex-start; /* Aligns the content to the top */
  justify-content: flex-start; /* Aligns the content to the left */
  margin-right: 3rem;
  min-width: 160px; /* Ensure a minimum width for small screens */
  img {    
    width: 100%; /* Make the image take the full width of its parent */
    height: auto; /* Keep the image aspect ratio */
    margin: 0 0 2rem 0;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column; /* Stack description content vertically */
  flex-grow: 1; /* Makes the description take up the remaining space */
`;

const MetaContent = styled.div`
  font-size: 1.5rem;
`;

const Galery: React.FC = () => {
  const list = getSharedAlbums();

  return (
    <Page title="Galery - Galerija">
      <>
        {list.map((album, i) => {
          return (
            <Row key={i}>
              <ImageContent>
                <span>
                  <a href={album.productUrl} title={album.title} target="_blank">
                    <img title={album.title} src={album.coverPhotoBaseUrl} />
                  </a>
                </span>
              </ImageContent>
              <Description>
                <div>
                  <div>
                    <a href={album.productUrl} target="_blank">
                      {album.title}
                    </a>
                  </div>
                  <MetaContent>
                    <div>Number of Photos in Album: {album.mediaItemsCount}</div>
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
