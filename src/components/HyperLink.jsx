import React from "react";
import Link from "gatsby-link";

function HyperLink(props) {
  return <Link {...props}> {props.children}</Link>;
  // return !!props.href ? (
  //   <a {...props}>{props.children}</a>
  // ) : (
  //   <Link {...props}>{props.children}</Link>
  // );
}

export { HyperLink };
