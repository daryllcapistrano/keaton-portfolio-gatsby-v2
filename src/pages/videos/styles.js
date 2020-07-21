import { Link } from "gatsby"
import styled from "styled-components"

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  max-width: 95%;
  margin: auto;
`
export const NavWrapper = styled.div`
  text-align: center;
  padding: 20px;
`
export const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  padding: 10px;
  :hover {
    color: #bdc3c7;
  }
`
export const YoutubeVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
