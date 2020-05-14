import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import ContactPhoto from '../images/contact-images/ContactPhoto';

const ContactPage = () => (
	<Layout>
		<SEO title="ContactPage" />
		<Grid container spacing={2} style={{ padding: `20px` }}>
			<Grid item xs={12} sm={12} md={6}>
				<Card style={{ position: `relative` }}>
					<ContactPhoto />
				</Card>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<Card style={{ position: `relative` }}>
					<ContactPhoto />
				</Card>
			</Grid>
		</Grid>>
	</Layout>
);

export default ContactPage;
