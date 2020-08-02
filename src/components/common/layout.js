import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import Header from "../Header/header"
import Footer from "../Footer/footer"

import GlobalStyle from "./globalStyles"
import { Wrapper } from "./styles"

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
