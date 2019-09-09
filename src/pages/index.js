import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import SEO from "../components/seo";
import Link from "gatsby-link";
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
          <PositionFx>Web Graphics & </PositionFx>
          <PositionFx>Interface Developer</PositionFx>
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
                Past Projects
              </AnimedLink>
            </li>
            <li>
              <AnimedExtLink
                css={navLinkStyles}
                href="https://github.com/Matnard/"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Github
              </AnimedExtLink>
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

class ExtLink extends React.Component {
  render() {
    return <a {...this.props}>{this.props.children}</a>;
  }
}
const AnimedLink = WithUnderlineAnimation(Link);
const AnimedExtLink = WithUnderlineAnimation(ExtLink);

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

  height: 100vh;
  width: 100%;
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
