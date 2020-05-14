import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ContactPhoto = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "contact-images/model1.jpg" }) {
				childImageSharp {
					fluid {
						src
					}
				}
			}
		}
	`);

	return <Img fluid={data.file.childImageSharp.fluid} style={{ height: `400px`, margin: `auto` }} />;
};

export default ContactPhoto;
