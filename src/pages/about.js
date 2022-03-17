import styled from "@emotion/styled";
import React from "react";
import SEO from "../components/seo";
import { Row } from "../layouts/index";

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
        `javascript`,
      ]}
    />
    <Row>
      <Section>
        <h2>Hi!</h2>
        <p>
          I am a French-Caribbean Web Graphics and Fullstack Engineer residing
          in Sydney, Australia. I've been coding since high school and
          professionally since 2010, after landing my first job in Toronto
          Canada as a Junior Flash Developer.
        </p>
        <p>
          Currently, I am a Software Engineer at Playground XYZ. My role
          includes the development and maintenance of React/TypeScript
          microservices hosted on Google Cloud Platform.
        </p>
        <p>
          Previously, I was part of a special project team at MYOB, where we
          worked on a ReactJS C# Dotnet Core stack in a micro-services
          architecture for the New Zealand feature of MYOB's online accounting
          software.
        </p>
        <p>
          I've studied both analogue and digital electronics to feed my interest
          in the granular aspects of software engineering.
        </p>
        <p>
          A key driver in my work is to make functional software that looks and
          feels good to use. I have a keen eye for design and functionality, and
          my interest in Data to Pixels/Texels led me to study graphics shader
          programming and design principles in my spare time.
        </p>
        <p>
          I have additional skills in current industry coding standards (Babel,
          ES Modules, ESNext ), 3+ years compound React (Styled components,
          Redux, Gatsby), knowledge in WebGL 2.0 and shader programming
          alongside libs such as Three.js, Pixi.js, GSAP for web graphics
          development, and experience in NodeJS and Dotnet core backend.
        </p>
      </Section>
    </Row>
  </>
);

export default AboutPage;
