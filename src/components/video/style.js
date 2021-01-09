// import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  margin: 1.5em 0;
  padding: 0.5em;
`
export const Item = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

// Begin Video Page Styles
export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  max-width: 95%;
  margin: auto;
`
export const NavWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
`
export const NavLink = styled(Link)`
  color: #333333;
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
