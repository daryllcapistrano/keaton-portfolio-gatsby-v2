import React from "react"

import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
// import Container from '@material-ui/core/Container';

const Header = ({ menuLinks }) => (
  <div style={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      color="default"
      elevation={0}
      style={{ backgroundColor: `inherit` }}
    >
      <Toolbar variant="dense" style={{ justifyContent: "space-between" }}>
        <Typography color="inherit">
          <Link to="/">Keaton Rodgers</Link>
        </Typography>
        <div style={{ display: "inline-flex" }}>
          {menuLinks.map(link => (
            <div
              key={link.name}
              style={{
                padding: `1rem`,
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
        </div>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
