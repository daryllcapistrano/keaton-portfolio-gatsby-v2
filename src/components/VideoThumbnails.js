import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const VideoThumbnails = () => {
	const data = useStaticQuery(graphql`
		query {
			allVideoThumbnailsJson {
				nodes {
					title
					src {
						childImageSharp {
							fluid(maxWidth: 300) {
								src
							}
						}
					}
				}
			}
		}
	`);

	return (
		<div>
			{data.allVideoThumbnailsJson.nodes.map((thumbnail) => (
				<div style={{ marginBottom: `1.45rem` }}>
					<div>{thumbnail.title}</div>
					<Img fluid={thumbnail.src.childImageSharp.fluid} />
				</div>
			))}
		</div>
	);
};
