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
const Wrapper = styled.div`
  flex-grow: 1;
  padding-top: 1em;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 1.75em;
`
const HeaderContainer = styled(AppBar)`
  background-color: inherit !important;
`
const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`
const Brand = styled(Link)`
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
`
const LinkWrapper = styled.div`
  padding: 0.5em;
  font-size: 0.75em;
  font-weight: 400;
  text-transform: uppercase;
`
const HeaderLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  :hover {
    color: #bdc3c7;
  }
`

const Header = ({ menuLinks }) => (
  <Wrapper>
    <HeaderContainer position="static" color="default" elevation={0}>
      <StyledToolbar variant="dense">
        <Brand to="/">Keaton Rodgers</Brand>
        <ResponsiveLinks>
          {menuLinks.map(link => (
            <LinkWrapper key={link.name}>
              <HeaderLink variant="button" to={link.link}>
                {link.name}
              </HeaderLink>
            </LinkWrapper>
          ))}
        </ResponsiveLinks>
      </StyledToolbar>
    </HeaderContainer>
  </Wrapper>
)

export default Header
