import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const flexVideo = css`
  padding: 80px;
  max-width: 1100px;
  background-color: #ffefec;
  text-align: center;
  margin: 5px auto;
  display: block;
  line-height: 1;
  border-radius: 20px;

  .flexPartStyles {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-content: center;
  text-align: center;
  margin: 0 auto;
  max-width: 1300px;


// element for flex descriptions
    p {
      font-size: 14px;
    }

    h6 {
      margin-bottom: 10px;
    }

    p,
    h6 {
      max-width: 200px;
    }
  }

  video {
    position: relative;
    z-index: 5;
    border-radius: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin: 50px;
  }

  // element for heading
  div {
    margin: 10px auto;
    max-width: 1000px;
    z-index: 3;

    h2 {
      max-width: 700px;
      margin: 0 auto 10px;
    }

    p {
      max-width: 403px;
      margin: 0px auto;
    }
  }
`;

const colors = css`
  position: absolute;
  z-index: 0;
  top: 1150px;
  left: 1000px;
`;

export function ScaleSection() {
  return (
    <>
      <img css={colors} src="/colors.png" alt="" />
      <section css={flexVideo}>
        <div>
          <h4>Scale Production</h4>
          <h2>Personalized dynamic images made easy</h2>
          <p>
            Engage with your audience like never before. Personalize your visual
            content to stand out from the crowd
          </p>
        </div>
        <video autoPlay={true} loop={true} muted={true} width="1000px">
          <source src="/dynamic-images-show.webm" type="video/webm" />
          <track kind="captions" />
        </video>
        <div className="flexPartStyles">
          <div>
            <h6>Personalize any layer</h6>
            <p>
              Every layer of your Abyssale templates can be personalized through
              URL parameters
            </p>
          </div>
          <div>
            <h6>Friendly URL builder</h6>
            <p>
              Build your URLS with a friendly interface matching your layers
              with URL parameters
            </p>
          </div>
          <div>
            <h6>Instant updates</h6>
            <p>
              Your dynamic images are instantly updated whenever you update your
              template layout
            </p>
          </div>
          <div>
            <h6>Safe and secured</h6>
            <p>
              Our safety settings are here to make sure no one spams your image
              generation credits
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
