import React from 'react';

import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
// import Container from '@material-ui/core/Container';

const Header = ({ siteTitle, menuLinks }) => (
	<React.Fragment>
		<AppBar position="static" color="default" elevation={0} style={{ backgroundColor: `inherit` }}>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					<Link to="/">Keaton Rodgers</Link>
				</Typography>
				<nav>
					<ul style={{ display: 'flex', flex: `1` }}>
						{menuLinks.map((link) => (
							<li
								key={link.name}
								style={{
									listStyleType: `none`,
									padding: `1rem`
								}}
							>
								<Link style={{ color: `black` }} to={link.link}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Toolbar>
		</AppBar>
	</React.Fragment>
);

export default Header;
