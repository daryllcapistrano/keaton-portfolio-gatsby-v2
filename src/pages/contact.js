import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ContactCard from '../components/ContactCard';

const ContactPage = () => (
	<Layout>
		<SEO title="ContactPage" />
		<ContactCard />
	</Layout>
);

export default ContactPage;
