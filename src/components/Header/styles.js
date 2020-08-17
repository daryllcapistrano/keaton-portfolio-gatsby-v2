import { Link } from "gatsby"
import styled from "styled-components"
import { Grid, AppBar, Toolbar } from "@material-ui/core"

export const StyledGrid = styled(Grid)`
  width: 100%;
  text-align: center;
`

export const ResponsiveLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: inline-flex;
`
export const Wrapper = styled.div`
  @media screen and (min-width: 2560px) {
    font-size: 2em;
  }
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 1.75em;
`
export const HeaderContainer = styled(AppBar)`
  background-color: inherit !important;
  text-align: center;
`
export const StyledToolbar = styled(Toolbar)`
  ${"" /* margin-bottom: 0.5em; */}
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
    border-bottom: 2px solid #bdc3c7;
  }
`
