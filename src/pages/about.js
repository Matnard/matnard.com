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
    <SEO
      title="About"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `fullstack`,
        `c#`,
        `dotnet core`,
        `javascript`
      ]}
    />
    <Row>
      <Section>
        <h2>Hi!</h2>
        <p>
          I am a French-Caribbean Fullstack Engineer living permanently in
          Sydney Australia and{" "}
          {/*<strike>currently working at whiteGREY</strike>*/}
          <strike>currently working at The Monkeys.</strike> currently working
          at MYOB
        </p>
        <p>
          {/*<strike>Here I create, maintain websites and JavaScript applications with
          React, Emotion and more recently serverless GatsbyJS websites
          extending WordPress v5 Gutenberg's blocks.</strike>*/}
          <strike>
            Here, with my React and PixiJs skills I'm helping planting trees by
            coding a website that creates awareness to get koalas{" "}
            <span role="img" aria-label="koala">
              🐨
            </span>{" "}
            better homes!
          </strike>
          <br />
          Here, I am part of a feature team that is working on a ReactJS C#
          Dotnet Core stack in a microservices architecture where we're enabling
          New Zealand taxes to be "filed" in the cloud{" "}
          <span role="img" aria-label="cloud">
            🌥️
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
