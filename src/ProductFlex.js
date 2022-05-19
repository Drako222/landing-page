/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const productStyles = css`
  display: flex;
  justify-content: stretch;
  height: 300px;
  gap: 35px;
  align-content: center;
  text-align: center;
  margin: 0 auto;
  max-width: 1250px;
  margin-bottom: 250px;

  img {
    height: 150px;
    margin-bottom: 10px;
    max-width: 250px;
  }

  .greys {
    background-color: #f9fafc;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 300px;

    p {
      font-size: 14px;
    }

    p,
    h6 {
      margin: 0px;
      max-width: 230px;
    }
  }

  .pinky {
    background-color: #f88d7d;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 300px;

    p,
    h6 {
      color: white;
      margin: 0px;
      max-width: 230px;
    }
  }
`;

export function ProductFlex() {
  return (
    <section css={productStyles}>
      <div className="greys">
        <img src="/produkt1.png" alt="" />
        <h6>Update product info</h6>
        <p>Update product images in real time</p>
      </div>
      <div className="greys">
        <img src="/produkt2.png" alt="" />
        <h6>Personalized emails</h6>
        <p>Upgrade your transactional e-mails</p>
      </div>
      <div className="greys">
        <img src="/produkt3.png" alt="" />
        <h6>Faster campaign rollout</h6>
        <p>Generate dynamic marketing banners for your website</p>
      </div>
      <div className="pinky">
        <img src="/produkt4.png" alt="" />
        <h6>Make your product viral</h6>
        <p>Auto-generate products OG images</p>
      </div>
    </section>
  );
}
