import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Link from "gatsby-link";
import WithUnderlineAnimation from "../WithUnderlineAnimation";
import mq, { mqMax } from "../../layouts/breakpoints";

function Nav() {
  const Container = styled.nav`
    margin: calc(var(--baseline) * 0.5) 0;
    mix-blend-mode: exclusion;
    ${mq[1]} {
      text-align: right;
      margin: var(--space-xl) 0;
    }
  `;

  const List = styled.ul`
    ${mqMax[1]} {
      padding: 0;
      display: grid;
      grid-column-gap: calc(var(--baseline) * 0.5);
      grid-template-columns: max-content max-content max-content;
    }
    list-style: none;
    li {
      display: inline;
      ${mq[1]} {
        display: block;
      }
    }
  `;

  const navLinkStyles = css`
    text-decoration: none;
    color: var(--color-text);

    &:visited {
      color: var(--color-text);
    }
  `;

  let AnimedLink = WithUnderlineAnimation(Link);
  //AnimedLink = WithRevealFx(AnimedLink);
  const AnimedExtLink = WithUnderlineAnimation(ExtLink);

  return (
    <Container>
      <List className="menu__list js-nav">
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
      </List>
    </Container>
  );
}

export default Nav;

class ExtLink extends React.Component {
  render() {
    return <a {...this.props}>{this.props.children}</a>;
  }
}
