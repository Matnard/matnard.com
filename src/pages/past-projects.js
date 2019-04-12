import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
//import SEO from "../components/seo";
//import WithUnderlineAnimation from "../components/WithUnderlineAnimation";
import { css } from "@emotion/core";

class Lab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  render() {
    const Div = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: var(--baseline);
    `;

    const labLinkStyles = css`
      text-decoration: none;
      text-transform: capitalize;
      color: var(--color-text);

      &:visited {
        color: var(--color-text);
      }
    `;

    const lion = [
      //   { name: "Sussan", url: "https://www.sussan.com.au/" },
      { name: "kirin", url: "https://www.kirinaus.com.au/" },
      { name: "hahn", url: "https://www.hahn.com.au/" },
      { name: "5 seeds", url: "https://www.5seeds.com.au/" },
      { name: "tooheys", url: "https://www.tooheys.com.au/" },
      { name: "beer it's beautiful", url: "https://beeritsbeautiful.com/" },
      { name: "XXXX", url: "https://www.xxxx.com.au/" },
      { name: "james boags", url: "https://www.jamesboag.com.au/" },
      { name: "james squire", url: "https://www.jamessquire.com.au/" },
      {
        name: "byron bay brewery",
        url: "https://www.byronbaybrewery.com.au/"
      },
      {
        name: "summerbright lager",
        url: "https://www.summerbrightlager.com.au/"
      },
      { name: "little creatures", url: "https://littlecreatures.com.au/" },
      { name: "furphy", url: "https://furphybeer.com.au/" },
      { name: "white rabbit", url: "https://whiterabbitbeer.com.au/" },
      { name: "iron jack", url: "https://ironjack.com.au/" },
      { name: "malt shovel", url: "https://www.maltshovel.com.au/" }
    ];

    return (
      <>
        {/* <SEO title="Lab" keywords={[`gatsby`, `application`, `react`]} /> */}
        <h3>Past Projects</h3>
        <p>
          Also, I have done quiet a great deal of maintenance since 2015{" "}
          <span role="img" aria-label="sweat">
            😅
          </span>
          .
          <br /> In no particular order here are links to projects that I have
          helped maintaining.
        </p>
        <Div>
          {lion.map(node => (
            <a
              css={labLinkStyles}
              key={node.name}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* {<Img src={node.screenshot_url} alt="" />} */}
              {node.name}
            </a>
          ))}
        </Div>
      </>
    );
  }
}

export default Lab;
export const pageQuery = graphql`
  {
    allMatnardProjects {
      edges {
        node {
          id
          name
          screenshot_url
          url
        }
      }
    }
  }
`;
