import React from "react";
import Link from "gatsby-link";

function HyperLink(props) {
  return !!props.href ? (
    <a {...props}>{props.children}</a>
  ) : (
    <Link {...props}>{props.children}</Link>
  );
}

export { HyperLink };
