'use client';

import { Global, css } from '@emotion/react';

const resetStyle = css`
  body {
    width: 100vw;
    min-height: 100vh;
  }
`;

export const CSSReset: React.FC = () => {
  return <Global styles={resetStyle} />;
};
