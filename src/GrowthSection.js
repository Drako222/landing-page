/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const flexStyles = css`
  display: flex;
  justify-content: center;
  margin: 50px auto;
  max-width: 1200px;
  gap: 20px;

  img {
    height: 450px;
  }
`;

const columnStyles = css`
  display: flex;
  flex-direction: column;

  .description {
    max-width: 550px;
    margin-bottom: 30px;
  }
`;

const buttons = css`
  display: flex;
  max-height: 3rem;
  justify-content: flex-start;
  gap: 10px;

  .lightButton {
    color: #f88d7d;
    display: flex;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    width: 135px;
    height: 3rem;
    background-color: #ffefec;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 10px;

    :hover {
      background-color: #1f2024;
      color: white;
    }
  }
  .pinkButton {
    color: white;
    display: flex;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    width: 135px;
    height: 3rem;
    background-color: #f88d7d;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-right: 30px;

    :hover {
      background-color: #1f2024;
    }
  }
`;

export function GrowthSection() {
  return (
    <section css={flexStyles}>
      <div css={columnStyles}>
        <h4>Growth & ROI</h4>
        <h1>Make your images Relevant</h1>
        <h3 className="description">
          Use URL parameters to deliver dynamic & personalized images. Works
          perfectly for email marketing campaigns, E-commerce stores, or blogs
          at scale..
        </h3>
        <div css={buttons}>
          <div className="pinkButton">
            <a>Get Started</a>
          </div>
          <a className="lightButton">Request Demo</a>
        </div>
      </div>
      <div>
        <img src="/ipad.png" alt="" />
      </div>
    </section>
  );
}
