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
          I am a French-Caribbean Fullstack Engineer residing in Sydney,
          Australia. I've been coding since high school and professionally since
          2010, after landing my first job in Toronto Canada as a Junior Flash
          Developer.
        </p>
        <p>
          Currently, I am part of a dedicated product team at Playground XYZ,
          where we are working on a ReactJS TypeScript stack in a micro-services
          architecture to enable our clients to get deep insights on how users
          engage with their advertisements.
        </p>
        <p>
          I've studied both analogue and digital electronics to feed my interest
          in the granular aspects of software engineering.
        </p>

        <p>
          A key driver in my work is to make functional software that looks and
          feels good to use. I have a keen eye for design and functionality. My
          interest in Data to Pixels/Texels led me to study graphics shader
          programming and design principles in my spare time.
        </p>
      </Section>
    </Row>
  </>
);

export default AboutPage;
