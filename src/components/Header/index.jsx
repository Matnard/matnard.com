import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";
import avatarPath from "../../media/profile-512.png";
// import GlitchyAvatar from "../glitchy-avatar";
import mq, { mqMax } from "../../layouts/breakpoints";

function Header() {
  const Container = styled.header`
    margin-top: var(--baseline);
    ${mq[1]} {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
    }
  `;

  // const ProfilePic = styled(GlitchyAvatar)`
  //   width: calc(var(--baseline) * 2) !important;
  //   height: calc(var(--baseline) * 2) !important;
  //   color: var(--color-text);
  //   float: right;

  //   ${mq[0]} {
  //     width: calc(var(--baseline) * 3) !important;
  //     height: calc(var(--baseline) * 3) !important;
  //   }

  //   ${mq[1]} {
  //     float: none;
  //     display: block;
  //     margin-bottom: calc(var(--baseline) / 2);
  //     vertical-align: bottom;
  //   }
  // `;

  const ProfilePic = styled.img`
    width: calc(var(--baseline) * 2) !important;
    height: calc(var(--baseline) * 2) !important;
    color: var(--color-text);
    float: right;

    ${mq[0]} {
      width: calc(var(--baseline) * 3) !important;
      height: calc(var(--baseline) * 3) !important;
    }

    ${mq[1]} {
      float: none;
      display: block;
      margin-bottom: calc(var(--baseline) / 2);
      vertical-align: bottom;
    }
  `;

  const Name = styled.h1`
    ${mqMax[1]} {
      display: inline;
      line-height: calc(var(--baseline) * 1);
    }
    font-weight: 300;
    margin: 0;
    line-height: var(--space-lg);
    font-size: var(--text-md);
    color: var(--color-text-heading);
  `;

  const Position = styled.h2`
    font-weight: 300;
    margin: 0;
    line-height: calc(var(--baseline) * 1.5);
    font-size: var(--text-md);
    color: var(--color-text);
  `;

  const Location = styled.p`
    margin: 0;
    line-height: calc(var(--baseline) * 1.5);
    color: var(--color-text);
  `;

  return (
    <Container>
      <Link to="/">
        <ProfilePic src={avatarPath} />
      </Link>
      <Name>
        <span>Mathieu Mencé</span>
      </Name>
      <Position>
        <span>Web Graphics &amp;</span>
        <br />
        <span>Interface Developer</span>
      </Position>
      <Location>
        <span>Sydney, AU</span>
      </Location>
    </Container>
  );
}

export default Header;
