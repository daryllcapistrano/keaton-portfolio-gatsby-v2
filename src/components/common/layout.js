import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "../Header"
import Footer from "../Footer"

import { slide as Menu } from "react-burger-menu"
import "./burgerStyles.css"

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 0.5em;
  }
  padding: 0 5em;
`

const MenuLink = styled(Link)`
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  margin: 0.5em;
`

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
