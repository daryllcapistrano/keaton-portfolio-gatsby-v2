// import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  margin: 1.5em 0;
  padding: 0.5em;
`
export const Item = styled.div`
  position: relative;
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  -webkit-text-stroke: 1px black;

  ${Item}:hover & {
    opacity: 0;
  }
`

// Begin Video Page Styles
export const NavWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2em;
`

export const InnerWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const VideoWrapper = styled.div`
  margin: 2em 0;
  padding: 1em;
`

export const NavLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  padding: 10px;
  :hover {
    color: #bdc3c7;
  }
`
// remove
export const YoutubeVideo = styled.iframe`
  margin: auto;
`
