import React from "react";
import styled from "@emotion/styled";
import "animate.css";

function RevealFx({children}) {
  const Mask = styled.span`
  overflow: hidden;
  display: block;
  span {
    animation-duration: 3s;
    animation-delay: 2s;
    display: block;
  }
  `
  return (
    <Mask>
      <span className="animated slideInUp">{children}</span>
    </Mask>
  )
}



const WithRevealFx = (WrappedComponent) => (props) => {
	
	return (
		<WrappedComponent {...props}>
      <RevealFx>
			  {props.children}
      </RevealFx>
		</WrappedComponent>
	)
}

export default WithRevealFx;
export { RevealFx };