import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// // icons
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import InstagramIcon from '@material-ui/icons/Instagram';

import ContactForm from '../components/ContactForm';

export default function ContactCard() {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "contact-images/model1.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Container style={{ padding: `20px`, width: `90vw` }}>
			<Card style={{ borderRadius: `0` }}>
				<Grid container>
					<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
						<Container style={{ padding: `24px` }}>
							<Card elevation={2}>
								<ContactForm />
							</Card>
						</Container>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
						<Container style={{ padding: `24px` }}>
							<Card elevation={2}>
								<Img fluid={data.file.childImageSharp.fluid} />
							</Card>
						</Container>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}
