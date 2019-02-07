import React from "react";
import { Row } from "../components/Layout";
import styled from "@emotion/styled";

const Section = styled.section`
grid-column-start: 1;
grid-column-end: 9;
`

export default function(){
	return (
		<Row>
			<Section>
				<h2>Hi!</h2>
				<p>I am a French-Caribbean Frontend Developer living permanently in Sydney Australia and currently working at <a href="https://www.jam3.com" target="_blank" rel="noopener noreferrer" >whiteGREY</a>.</p>
				<p>Here I create and maintain JavaScript applications with React, Emotion and more recently serverless GatsbyJS websites extending WordPress v5 Gutenberg's blocks.
				I've studied analogue and digital electronics and really enjoy the low-level of things.</p>
				<p>I've been coding since high school and professionally since 2010, after landing my first job in Toronto Canada at Jam3media (now <a href="https://www.jam3.com" target="_blank" rel="noopener noreferrer" >Jam3</a>) as a Junior Flash Developer.</p>
				<p>Data to Pixels/Texels is the side I'm interested in, that's why I spend time studying graphics shader programming and design principles to eventually make stuff "look good" and "feel good" 😅.</p>
			</Section>
		</Row>
	)
}
