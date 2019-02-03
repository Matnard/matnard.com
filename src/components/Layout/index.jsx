import React from "react";
import "normalize.css";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Header from "../Header";
import Nav from "../Nav";
import { vars, typography, spacing, colors} from "./styles";


function Layout({children}) {
	const Block = styled.div`
	display: grid;
	grid-template-columns: 1min-content 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: ". .";
	`;
	const LayoutHeader = styled.div`
	margin: var(--baseline);
	float: right;
	position: relative;

	@media (min-width: 375px) {
		float: left;
	}

	&:after {
		content: "";
		width: calc(var(--baseline) * 2);
		height: calc(var(--baseline) / 4);
		background-color: var(--color-text);
		position: absolute;
		right: 0;
		mix-blend-mode: exclusion;

		@media (min-width: 375px) {
			width: calc(var(--baseline) * 3);
		}
	}
	`;
	return (
		<>
			<Global styles={css`
				${vars}
				${typography}
				${spacing}
				${colors}
				`} />
			<Block>
				<LayoutHeader>
					<Header />
					<Nav />
				</LayoutHeader>
				{children}
			</Block>
		</>
	)
}

export default Layout;
