import React from 'react';
import Container from '@material-ui/core/Container';

const Footer = () => (
	<Container>
		<div style={{ textAlign: `center`, padding: `28px` }}>
			<a
				href="https://www.instagram.com/keatonrodgers"
				style={{
					color: '#000000',
					textDecoration: `none`
				}}
			>
				KR Media
			</a>{' '}
			© {new Date().getFullYear()}{' '}
		</div>
	</Container>
);

export default Footer;
