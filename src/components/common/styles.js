import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import styled from "styled-components"

export const ResponsiveLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: inline-flex;
`
export const Wrapper = styled.div`
  flex-grow: 1;
  padding-top: 1em;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 1.75em;
`
export const HeaderContainer = styled(AppBar)`
  background-color: inherit !important;
`
export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`
export const Brand = styled(Link)`
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
`
export const LinkWrapper = styled.div`
  padding: 0.5em;
  font-size: 0.75em;
  font-weight: 400;
  text-transform: uppercase;
`
export const HeaderLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  :hover {
    color: #bdc3c7;
  }
`
