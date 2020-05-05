import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const styledDiv = styled.div`
  margin: 0 auto,
  maxWidth: 960,
	padding: 0 1.0875rem 1.45rem,
`;

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<React.Fragment>
			<Header siteTitle={data.site.siteMetadata.title} />
			<styledDiv>
				<main>{children}</main>
			</styledDiv>
			<Footer />
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
