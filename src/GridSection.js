/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const gridStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 120px;
  margin: 200px auto 200px;
  max-width: 1300px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 348px;
    margin: auto;
    text-align: center;

    h5 {
      margin-top: 30px;
      margin-bottom: 18px;
    }
  }
`;
export function GridSection() {
  return (
    <div css={gridStyles}>
      <div>
        <img src="/icon1.svg" alt="" />
        <h5>Editor</h5>
        <p>Every tools designers need to let their creativity run freely</p>
      </div>
      <div>
        <img src="/icon2.svg" alt="" />
        <h5>Spreadsheet</h5>
        <p>
          A powerful and intuitive spreadsheet to manage and edit your content
        </p>
      </div>
      <div>
        <img src="/icon3.svg" alt="" />
        <h5>+1000</h5>
        <p>
          Integrations Use our Zapier, Integromat, or Airtable integrations to
          create elaborate no-code automation.
        </p>
      </div>
      <div>
        <img src="/icon4.svg" alt="" />
        <h5>Template form</h5>
        <p>
          Make it easy for anyone on your team to create amazing visuals with a
          public form. No design skills required
        </p>
      </div>
      <div>
        <img src="/icon5.svg" alt="" />
        <h5>Collaboration</h5>
        <p>
          Abyssale is your team hub for everything creative. You can comment,
          set statutes, approve or share templates and images.
        </p>
      </div>
      <div>
        <img src="/icon6.svg" alt="" />
        <h5>Brand presets</h5>
        <p>
          Maintain brand design guidelines and save time with our complete brand
          presets. No more off-brand marketing visuals!
        </p>
      </div>
    </div>
  );
}
