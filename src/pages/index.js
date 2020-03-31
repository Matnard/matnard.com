import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import SEO from "../components/seo";
import { HyperLink } from "../components/HyperLink";
//import matnard from "../media/profile-17.svg";
import WithUnderlineAnimation from "../components/WithUnderlineAnimation";
import WithRevealFx from "../components/WithRevealFx";

const IndexPage = () => (
  <>
    <Wrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Section>
        {/*<ProfilePic src={matnard} alt="Matnard profile picture" />*/}
        <div>
          <NameFx>Mathieu Mencé</NameFx>
          <PositionFx>Web Graphics &amp; </PositionFx>
          <PositionFx>Fullstack Engineer</PositionFx>
          <LocationFx>
            <span>Sydney, AU</span>
          </LocationFx>
          <Ul>
            <li>
              <AnimedLink css={navLinkStyles} to="/about">
                About
              </AnimedLink>
            </li>
            <li>
              <AnimedLink css={navLinkStyles} to="/contact">
                Contact
              </AnimedLink>
            </li>
            <li>
              <AnimedLink css={navLinkStyles} to="/past-projects">
                Projects
              </AnimedLink>
            </li>
            <li>
              <AnimedLink
                css={navLinkStyles}
                href="https://github.com/Matnard/"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Github
              </AnimedLink>
            </li>
            <li>
              <AnimedLink css={navLinkStyles} to="/lab">
                Lab
              </AnimedLink>
            </li>
          </Ul>
        </div>
      </Section>
    </Wrapper>
  </>
);

const AnimedLink = WithUnderlineAnimation(HyperLink);

const navLinkStyles = css`
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 85vh;
  width: 100%;
  @media (min-width: 768px) {
    height: 85vh;
  }
`;

const Section = styled.section`
  /*display: grid;
grid-column-gap: calc(var(--baseline) * 1);
grid-template-columns: calc(var(--baseline) * 9) max-content;*/
`;

const Ul = styled.ul`
  display: grid;
  padding: 0;
  margin: calc(var(--baseline) * 1) 0;
  grid-column-gap: calc(var(--baseline) * 1);
  grid-template-columns: max-content max-content max-content max-content max-content;
  list-style: none;
  li {
    display: inline;
  }
`;

const Name = styled.h1`
  font-weight: 300;
  margin: 0;

  line-height: var(--space-lg);
  font-size: var(--text-md);
  color: var(--color-text-heading);

  @media (min-width: 768px) {
    line-height: var(--space-xl);
    font-size: var(--text-lg);
  }
`;

const NameFx = WithRevealFx(Name);

const Position = styled.h2`
  font-weight: 300;
  margin: 0;

  line-height: var(--space-md);
  font-size: var(--text-md);
  color: var(--color-text);

  @media (min-width: 768px) {
    line-height: var(--space-lg);
    font-size: var(--text-lg);
    color: var(--color-text);
  }
`;

const PositionFx = WithRevealFx(Position);

const Location = styled.p`
margin: 0;
line-height: var(--space-md);
font-size: 1rem);
color: var(--color-text);

@media(min-width: 768px) {
  line-height: var(--space-lg);
  font-size: var(--text-md);
  color: var(--color-text);
}
`;

const LocationFx = WithRevealFx(Location);

export default IndexPage;
