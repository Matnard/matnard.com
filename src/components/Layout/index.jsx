import React from "react";
import "normalize.css";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Header from "../Header";
import Nav from "../Nav";
import { vars, typography, spacing, colors} from "./styles";
import Transition from "../Transition";
import Background from "../Background"

const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	grid-column-gap: var(--baseline);
	`

function Layout({children, location}) {
	const Block = styled.div`
	display: grid;
	grid-template-columns: max-content 1fr;
	grid-column-gap: var(--baseline);
	margin: 0 auto;
	max-width: calc(45 * var(--baseline));

	`;
	const LayoutHeader = styled.div`
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
			<Background />
			<Block>
				<LayoutHeader>
					{<Header />}
					<Nav />
				</LayoutHeader>
				<Transition location={location}>
          {children}
        </Transition>
			</Block>
		</>
	)
}

export {Row}
export default Layout;
