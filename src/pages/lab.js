import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import SEO from "../components/seo";
//import WithUnderlineAnimation from "../components/WithUnderlineAnimation";
import { css } from "@emotion/core";
import Img from "../components/image";
import mq from "../layouts/breakpoints";

function Lab(props) {
  const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--baseline);
  `;

  const Feats = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--baseline);

    ${mq[0]} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  const labLinkStyles = css`
    text-decoration: none;
    text-transform: capitalize;
    color: var(--color-text);

    &:visited {
      color: var(--color-text);
    }

    .gatsby-image-wrapper {
      margin-bottom: 12px;
    }
  `;

  return (
    <>
      <SEO
        title="Lab"
        keywords={[`experiments`, `javascript`, `frontend`, `webgl`]}
      />
      <h3>Lab</h3>
      <Feats>
        <a
          css={labLinkStyles}
          href="https://github.com/Matnard/NardGL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img filename="nardgl.png" />
          {"Open-source graphics library"}
        </a>
      </Feats>
      <br />
      <Div>
        {props.data.allMatnardProjects.edges.map(({ node }) => (
          <a
            css={labLinkStyles}
            key={node.id}
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<Img src={node.screenshot_url} alt="" />}
            {node.name}
          </a>
        ))}
      </Div>
    </>
  );
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
