import React from "react"
// import clsx from "clsx"
// import { makeStyles, useTheme } from "@material-ui/core/styles"
// import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
// import CssBaseline from "@material-ui/core/CssBaseline"
// import List from "@material-ui/core/List"
// import Typography from "@material-ui/core/Typography"
// import Divider from "@material-ui/core/Divider"
// import IconButton from "@material-ui/core/IconButton"
// import MenuIcon from "@material-ui/icons/Menu"
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
// import ChevronRightIcon from "@material-ui/icons/ChevronRight"
// import ListItem from "@material-ui/core/ListItem"
// import ListItemIcon from "@material-ui/core/ListItemIcon"
// import ListItemText from "@material-ui/core/ListItemText"
// import InboxIcon from "@material-ui/icons/MoveToInbox"
// import MailIcon from "@material-ui/icons/Mail"
import { Link } from "gatsby"
import styled from "styled-components"

const ResponsiveLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: inline-flex;
`
const MobileDrawer = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
  }
  display: none;
`

const Header = ({ menuLinks }) => (
  <div
    style={{
      flexGrow: 1,
      paddingTop: `.75rem`,
      fontFamily: `Poppins, sans-serif`,
      fontWeight: 700,
      fontSize: `1.5rem`,
    }}
  >
    <AppBar
      position="static"
      color="default"
      elevation={0}
      style={{ backgroundColor: `inherit` }}
    >
      <Toolbar variant="dense" style={{ justifyContent: `space-between` }}>
        <div>
          <Link to="/" style={{ display: `inline-flex` }}>
            Keaton Rodgers
          </Link>
        </div>
        <ResponsiveLinks>
          {menuLinks.map(link => (
            <div
              key={link.name}
              style={{
                padding: `.5rem`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
              }}
            >
              <Link
                variant="button"
                color="textPrimary"
                style={{ color: `black` }}
                to={link.link}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </ResponsiveLinks>
        <MobileDrawer>asdfasdfaadsaffa</MobileDrawer>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
