import React, { Component } from "react";
import { graphql } from 'gatsby'
import styled from "@emotion/styled";

class Lab extends Component {


	constructor(props) {
		super(props)
		this.state = {
			projects: []
		};
	}

	render(){

		const Div = styled.div`
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: var(--baseline);
		`

		const Img = styled.img`
		width: 100%;
		`

		return (
			<>
				<h3>Lab</h3>
				<Div>
					{this.props.data.allMatnardProjects.edges.map(({node}) => (
						<a key={node.id} href={node.url} target="_blank">
							<Img src={node.screenshot_url} alt="" />
							<p>{node.name}</p>
						</a>	
					))}
				</Div>
			</>
		)
	}
}

export default Lab;
export const pageQuery = graphql`
{
	allMatnardProjects {
		edges {
		 node {
			 id
			 name
			 screenshot_url
			 url
		 }
	 }
	}
}
`

