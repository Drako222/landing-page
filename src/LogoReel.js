/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const logoReelStyles = css`
  display: flex;
  justify-content: center;
  gap: 40px;
  height: 21px;
  margin: 180px auto 180px;
`;

export function LogoReel() {
  return (
    <section css={logoReelStyles}>
      <img src="/logo-backmarket.svg" alt="" />
      <img src="/logo-dolead.svg" alt="" />
      <img src="logo-doordash.svg" alt="" />
      <img src="logo-karos.svg" alt="" />
      <img src="logo-trustfolio.svg" alt="" />
    </section>
  );
}
