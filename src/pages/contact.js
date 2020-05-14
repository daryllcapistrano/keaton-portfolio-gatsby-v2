import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Grid from '@material-ui/core/Grid';

import ContactPhoto from '../images/contact-images/ContactPhoto';

const ContactPage = () => (
	<Layout>
		<SEO title="ContactPage" />
		<Grid container>
			<Grid item xs={12} sm={12} md={6}>
				<ContactPhoto />
			</Grid>
		</Grid>>
	</Layout>
);

export default ContactPage;
