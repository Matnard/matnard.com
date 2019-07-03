import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "normalize.css";
// import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Header from "../components/Header/index";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Transition from "../components/transition";
import "./styles.css";
import Background from "../components/Background";
import mq from "./breakpoints";

const Layout = ({ children, location, pageContext }) => {
  const Wrap = pageContext.layout === "home" ? "div" : Block;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          {/* {<Global styles={css`
           ${vars}
           ${typography}
           ${spacing}
           ${colors}
           `} 
         />} */}
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
              rel="stylesheet"
            />
          </Helmet>
          <Background page={location} />
          <Wrap>
            {pageContext.layout !== "home" && (
              <LayoutHeader>
                <Header />
                <Nav />
              </LayoutHeader>
            )}
            <Transition location={location}>
              <ContentWrapper>{children}</ContentWrapper>
            </Transition>
          </Wrap>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const Block = styled.div`
  ${mq[1]} {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: var(--baseline);
    margin: 0 auto;
    max-width: calc(45 * var(--baseline));
  }
`;

const LayoutHeader = styled.div`
  position: relative;
  &:after {
    content: "";
    width: calc(var(--baseline) * 2);
    height: calc(var(--baseline) / 4);
    background-color: var(--color-text);
    position: absolute;
    right: 0;
    mix-blend-mode: exclusion;

    ${mq[0]} {
      width: calc(var(--baseline) * 3);
    }
  }
`;

const ContentWrapper = styled.div`
  height: 100vh;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-column-gap: var(--baseline);
`;

export default Layout;
export { Row };
