import React from 'react';

import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ({ siteTitle }) => (
	<React.Fragment>
		<AppBar position="static" color="default" elevation={0} style={{ backgroundColor: `inherit` }}>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					<Link to="/">{siteTitle}</Link>
				</Typography>
				<div>
					<Link to="/">Video</Link>
					<Link to="/photos">Photos</Link>
					<Link to="/contact">Contact</Link>
				</div>
			</Toolbar>
		</AppBar>
	</React.Fragment>
);

export default Header;
