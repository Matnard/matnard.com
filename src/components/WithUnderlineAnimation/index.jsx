import React from "react";
import { css } from "@emotion/core";

const styles = css`
display: inline-block;
position: relative;
color: white;

&::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: transform 0.25s ease-out;
  transform: scaleX(0);
  transform-origin: bottom right;
}

&:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`

const WithUnderlineAnimation = WrappedComponent => props => {
	return (
		<WrappedComponent css={styles} {...props} />
	)
}

export default WithUnderlineAnimation;
