import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export const VideoThumbnails = () => {
	const data = useStaticQuery(graphql`
		query {
			allVideoThumbnailsJson {
				nodes {
					link
					title
					src {
						childImageSharp {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Grid container spacing={2} direction="row" justify="center" align-items="center" style={{ padding: `20px` }}>
			{data.allVideoThumbnailsJson.nodes.map((thumbnail, index) => (
				<Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
					<Card style={{ position: `relative` }}>
						<Link to={thumbnail.link}>
							<Img
								fluid={thumbnail.src.childImageSharp.fluid}
								style={{ width: `100%`, height: `400px`, objectFit: `fill` }}
							/>
						</Link>
						<div
							style={{
								color: `white`,
								fontSize: `32px`,
								fontWeight: `500`,
								textShadow: `2px 2px 3px rgba(0,0,0,0.57)`,
								width: `100%`,
								position: `absolute`,
								top: `80%`,
								left: `50%`,
								transform: `translate(-50%, -50%)`,
								textTransform: `uppercase`,
								textAlign: `center`
							}}
						>
							{thumbnail.title}
						</div>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};
