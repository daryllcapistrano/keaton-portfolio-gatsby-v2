import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { BurgerMenu } from "../Header/BurgerMenu"
import { Header } from "../Header"
import { Footer } from "../Footer"

import { GlobalStyle, Wrapper } from "./styles"

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
      <GlobalStyle />
      <BurgerMenu />
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
