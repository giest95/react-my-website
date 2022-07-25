import React from "react";

//styles
import {
  Wrapper,
  PaycordStyle,
  TeamBlueStyle,
  BlenderStyle,
} from "./Portfolio.styles";

//fade in
import Fade from "react-reveal/Fade";

//images
import Paycord from "../../img/paycord.png";
import NFT from "../../img/NFT.png";
import Hopper from "../../img/Hopper.PNG";

const Portfolio = () => {
  return (
    <Wrapper>
      <Fade>
        <h2 className="numberedHeadings">Projects</h2>
        <PaycordStyle>
          <a
            className="projectImage"
            href="https://www.paycord.net/v3/beta_dashboard.php"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              style={{ resizeMode: "cover", height: 350 }}
              src={Paycord}
              alt="Paycord Site"
            />
          </a>

          <a
            className="projectName"
            href="https://www.paycord.net/v3/beta_dashboard.php"
            target={"_blank"}
            rel="noreferrer"
          >
            <h3>Paycord</h3>
          </a>

          <p>
            A dashboard for Discord server owners to process payments for roles
            within their community. This has been used on over 100 Servers and
            processed over $500,000 in transactions. (Requires Discord sign in)
          </p>

          <ul>
            <li>API</li>
            <li>JavaScript</li>
            <li>Azure</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </PaycordStyle>
      </Fade>

      <Fade>
        <TeamBlueStyle>
          <a
            className="projectImage"
            href="https://team-blue-8951b.web.app"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              style={{ resizeMode: "cover", height: 350 }}
              src={Hopper}
              alt="Hopper Image"
            />
          </a>

          <a
            className="projectName"
            href="https://team-blue-8951b.web.app"
            target={"_blank"}
            rel="noreferrer"
          >
            <h3>Trampoline Park</h3>
          </a>

          <p>
            Trampoline park website built with a team of 4 utilizing github.
            Users are able to buy dummy passes and products using the checkout.
            Entering /admin in URL will provide an admin dashboard after sign
            in.
          </p>

          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Stripe</li>
          </ul>
        </TeamBlueStyle>
      </Fade>

      <Fade>
        <BlenderStyle>
          <a
            className="projectImage"
            href="https://github.com/giest95/BlenderNFT"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              style={{ resizeMode: "cover", height: 500 }}
              src={NFT}
              alt="Blender NFT"
            />
          </a>

          <a
            className="projectName"
            href="https://github.com/giest95/BlenderNFT"
            target={"_blank"}
            rel="noreferrer"
          >
            <h3>Blender Procedural Generator</h3>
          </a>

          <p>
            Procedural generator builds a multi-layer object with randomly
            generated assets in Blender. The object is rendered into an image,
            saved and then deleted for the next build to begin.
          </p>

          <ul>
            <li>Python</li>
            <li>Blender API</li>
          </ul>
        </BlenderStyle>
      </Fade>
    </Wrapper>
  );
};
export default Portfolio;
