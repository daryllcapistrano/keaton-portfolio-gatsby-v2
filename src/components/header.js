import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import styled from "styled-components"

const ResponsiveLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: inline-flex;
`

const Header = ({ menuLinks }) => (
  <div
    style={{
      flexGrow: 1,
      paddingTop: `1rem`,
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
          <Link
            to="/"
            style={{
              color: `black`,
              textTransform: `uppercase`,
              textDecoration: `none`,
            }}
          >
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
                fontWeight: `500`,
                textTransform: `uppercase`,
              }}
            >
              <Link
                variant="button"
                color="textPrimary"
                style={{ color: `black`, textDecoration: `none` }}
                to={link.link}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </ResponsiveLinks>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
