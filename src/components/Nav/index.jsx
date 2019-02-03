import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Link from "gatsby-link";

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

	return (
		<Container>
			<List class="menu__list js-nav">
				<li><Link css={navLinkStyles} to="/about"><span><span className="animated slideInUp">About</span></span></Link></li>
				<li><Link css={navLinkStyles} to="/lab"><span><span className="animated slideInUp">Lab </span></span></Link></li>
				<li><a css={navLinkStyles} href="mailto:m.mence@matnard.com"><span><span className="animated slideInUp">Contact</span></span></a></li>
			</List>
		</Container>
	)
}

export default Nav;
