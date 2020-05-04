import React from 'react';

import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ({ siteTitle }) => (
	<AppBar position="static" color="default" elevation={0}>
		<Toolbar>
			<Typography variant="h6" color="inherit" noWrap>
				{siteTitle}
			</Typography>
			<nav>
				<Link variant="button" color="textPrimary" href="#">
					Video
				</Link>
				<Link variant="button" color="textPrimary" href="#">
					Photos
				</Link>
				<Link variant="button" color="textPrimary" href="#">
					Contact
				</Link>
			</nav>
		</Toolbar>
	</AppBar>
);

export default Header;
