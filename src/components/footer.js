import React from 'react';
import Container from '@material-ui/core/Container';

const Footer = () => (
	<Container>
		<div>
			© {new Date().getFullYear()}{' '}
			<a
				href="https://www.instagram.com/keatonrodgers"
				style={{
					color: '#000000'
				}}
			>
				KR Media
			</a>
		</div>
	</Container>
);

export default Footer;
