import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "../Header/header"
import Footer from "../Footer/footer"

import { slide as Menu } from "react-burger-menu"
import "./burgerStyles.css"
import { MenuLink, Wrapper } from "./styles"

const Layout = ({ children }) => {
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
      <Menu right pageWrapId={"page-wrap"}>
        <MenuLink to="/">videos</MenuLink>
        <MenuLink to="/photos">photos</MenuLink>
        <MenuLink to="/clients">clients</MenuLink>
        <MenuLink to="/contact">contact</MenuLink>
      </Menu>
      <Wrapper>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <main id="page-wrap">{children}</main>
      </Wrapper>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
