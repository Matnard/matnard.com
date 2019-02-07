import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Link from "gatsby-link";
import WithUnderlineAnimation from "../WithUnderlineAnimation";
import WithRevealFx from "../WithRevealFx";

function Nav() {

	const Container = styled.nav`
	text-align: right;
	margin: var(--space-xl) 0;
	mix-blend-mode: exclusion;
	`;

	const List = styled.ul`
	list-style: none;
	`;

	const navLinkStyles = css`
	text-decoration: none;
	color: var(--color-text);

	&:visited {
		color: var(--color-text);
	}
	`;

	let AnimedLink = WithUnderlineAnimation(Link);
	//AnimedLink = WithRevealFx(AnimedLink);

	return (
		<Container>
			<List className="menu__list js-nav">
			  <li><AnimedLink css={navLinkStyles} to="/">About</AnimedLink></li>
				<li><AnimedLink css={navLinkStyles} to="/contact">Contact</AnimedLink></li>
				<li><AnimedLink css={css`${navLinkStyles} opacity: 0.3`} to="/lab">Lab</AnimedLink></li>
			</List>
		</Container>
	)
}

export default Nav;
