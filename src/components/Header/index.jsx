import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";
import matnard from "../../media/profile-17.svg"

function Header() {
	const Container = styled.header`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
	`;

	const ProfilePic = styled.img`
	vertical-align: bottom;
	width: calc(var(--baseline) * 2);
	color: var(--color-text);
	margin-bottom: calc(var(--baseline) / 2);

	@media (min-width: 375px) {
		width: calc(var(--baseline) * 3);
	}
	`;

	const Name = styled.h1`
	font-weight: 700;
	margin: 0;
	line-height: var(--space-lg);
	font-size: var(--text-md);
	color: var(--color-text);
	`;

	const Position = styled.h2`
	font-weight: 300;
	margin: 0;
	line-height: calc(var(--baseline)*1.5);
	font-size: var(--text-md);
	color: var(--color-text);
	`;

	const Location = styled.p`
	margin: 0;
	line-height: calc(var(--baseline)*1.5);
	color: var(--color-text);
	`;

	return (
		<Container>
			<Link to="/"><ProfilePic src={matnard} alt="Matnard profile picture" /></Link>
			<Name><span><span className="animated slideInUp">Mathieu Mencé</span></span></Name>
			<Position>
				<span><span className="animated slideInUp">Web Graphics & </span></span>
				<span><span className="animated slideInUp">Interface Developer</span></span>
			</Position>
			<Location><span><span class="animated slideInUp">Sydney, AU</span></span></Location>
		</Container>
	)
}

export default Header;
