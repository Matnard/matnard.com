import React from "react";
import { Row } from "../layouts/index";
import styled from "@emotion/styled";
import SEO from "../components/seo";

const Section = styled.section`
  grid-column-start: 1;
  grid-column-end: 9;
`;

const AboutPage = () => (
  <>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Row>
      <Section>
        <h2>Hi!</h2>
        <p>
          I am a French-Caribbean Frontend Developer living permanently in
          Sydney Australia and{" "}
          {/*<strike>currently working at whiteGREY</strike>*/}currently working
          at The Monkeys.
        </p>
        <p>
          {/*<strike>Here I create, maintain websites and JavaScript applications with
          React, Emotion and more recently serverless GatsbyJS websites
          extending WordPress v5 Gutenberg's blocks.</strike>*/}
          Here, with my React and PixiJs skills I'm helping planting trees and
          create awareness to get koalas better homes{" "}
          <span role="img" aria-label="koala">
            🐨
          </span>
          .
        </p>
        <p>
          I've studied analogue and digital electronics and really enjoy the
          low-level of things. I've been coding since high school and
          professionally since 2010, after landing my first job in Toronto
          Canada as a Junior Flash Developer.
        </p>
        <p>
          Data to Pixels/Texels is the side I'm interested in, that's why I
          spend time studying graphics shader programming and design principles
          to eventually make stuff "look good" and "feel good"{" "}
          <span role="img" aria-label="sweat">
            😅
          </span>
          .
        </p>
      </Section>
    </Row>
  </>
);

export default AboutPage;
