import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

import "./burgerStyles.css"

const Layout = ({ children, menuLinks }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Menu pageWrapId={"page-wrap"}>
        <Link
          to="/"
          style={{
            color: `black`,
            textTransform: `uppercase`,
            textDecoration: `none`,
            fontFamily: `Poppins, sans-serif`,
            fontWeight: 700,
            fontSize: `1.5rem`,
          }}
        >
          home
        </Link>
        <Link
          to="/photos"
          style={{
            color: `black`,
            textTransform: `uppercase`,
            textDecoration: `none`,
            fontFamily: `Poppins, sans-serif`,
            fontWeight: 700,
            fontSize: `1.5rem`,
          }}
        >
          photos
        </Link>
        <Link
          to="/clients"
          style={{
            color: `black`,
            textTransform: `uppercase`,
            textDecoration: `none`,
            fontFamily: `Poppins, sans-serif`,
            fontWeight: 700,
            fontSize: `1.5rem`,
          }}
        >
          clients
        </Link>
        <Link
          to="/contact"
          style={{
            color: `black`,
            textTransform: `uppercase`,
            textDecoration: `none`,
            fontFamily: `Poppins, sans-serif`,
            fontWeight: 700,
            fontSize: `1.5rem`,
          }}
        >
          contact
        </Link>
      </Menu>

      <div style={{ padding: `0 .5rem ` }}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />

        <main id="page-wrap">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
