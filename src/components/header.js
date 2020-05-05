import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const StyledAppBar = styled(AppBar)`
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: hsla(0,0%,100%,.7);
  background-color: #24292e;
`;

const NavLink = styled(Link)`
  color: rgb(109, 182, 91);
  margin: 0 0 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const Header = ({ siteTitle }) => (
	<React.Fragment>
		<StyledAppBar position="static" color="default" elevation={0}>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					{siteTitle}
				</Typography>
				<NavLink href="#">Video</NavLink>
				<NavLink href="#">Photos</NavLink>
				<NavLink href="#">Contact</NavLink>
			</Toolbar>
		</StyledAppBar>
	</React.Fragment>
);

export default Header;
