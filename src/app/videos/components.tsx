/** @jsxImportSource @emotion/react */
'use client' ;

import { css } from '@emotion/react';
import Page from '@/templates/page';

const content = css``;

const videoContainer = css`
  position: relative; 
  padding-bottom: 56.25%; 
  padding-top: 30px; 
  height: 0; 
  overflow: hidden;

  iframe {
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
  }
`;

export function AboutPageContent() {
  return (
    <Page title='Videos'>
      <div css={content}>
        <p>
          <strong>Jasikovo 2015 - DJI Phantom 2 - Video 1</strong>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/ygZYiLGtWj8?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <strong>Susreti Penzionera 1997 Jasikovo</strong>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/SIS4Pb8WF6Y?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <strong>Vidosav Jorgovanovic Magicna Frula Homolja</strong>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/OqzWrQJVQFw?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/OSd5tqe1D-4?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <strong>Bacija Jasikova 2014</strong>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/BNH-oAlQtuk?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <strong>Jasikovo iz visine</strong>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/f15MyikO6KI?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/7odORgOmdfk?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
        <p>
          <div css={videoContainer}>
            <iframe src='https://www.youtube.com/embed/07WdCyFY7xo?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent' />
          </div>
        </p>
      </div>
    </Page>
  );
}
