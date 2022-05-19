/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headingStyle = css`
  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: 140px;
  margin-right: 800px;
  line-height: 1;

  p {
    margin-top: 25px;
    font-size: 16px;
    line-height: normal;
  }
`;

export function Heading1() {
  return (
    <div css={headingStyle}>
      <h4>What can you build</h4>
      <h2>One Dynamic image infinite applications!</h2>
      <p>
        With Dynamic Image, start creating powerful brand experiences that drive
        more customer engagement and ROI in minutes
      </p>
    </div>
  );
}
