import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					menuLinks {
						link
						name
					}
				}
			}
		}
	`);

	return (
		<React.Fragment>
			<Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />

			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
