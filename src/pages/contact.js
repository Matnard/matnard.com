import React from "react";
import SEO from "../components/seo";

export default function() {
  return (
    <>
      <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
      <section>
        <h3>Contact</h3>

        <p>
          Get in touch with me on{" "}
          <a
            href="https://au.linkedin.com/in/mathieu-%E2%80%9Cmatnard%E2%80%9D-menc%C3%A9-14826017"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
          <br />
          Twitter DM{" "}
          <a
            href="https://twitter.com/mamath"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mamath
          </a>
          <br />
          Or on Discord @<u>matnard#1565</u>
        </p>
      </section>
    </>
  );
}
