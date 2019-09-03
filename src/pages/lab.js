import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import SEO from "../components/seo";
//import WithUnderlineAnimation from "../components/WithUnderlineAnimation";
import { css } from "@emotion/core";
import Img from "../components/image";
import mq from "../layouts/breakpoints";

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
      color: var(--color-text);

      &:visited {
        color: var(--color-text);
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
          {this.props.data.allMatnardProjects.edges.map(({ node }) => (
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
