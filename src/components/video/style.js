import styled from "styled-components"

export const Grid = styled.div`
  position: relative;
  display: grid;
  margin: 3em 2.75em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  @media (min-width: 688px) {
    margin: 2em 4em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.75em;
  }
  @media (min-width: 992px) {
    margin: 2em 8em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.75em;
  }
  @media (min-width: 1312px) {
    margin: 2em 12em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1em;
  }
`
export const Item = styled.div`
  position: relative;
`

export const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 2px;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4), 0px 2px 3px rgba(0, 0, 0, 0.1),
    0px 3px 4px rgba(0, 0, 0, 0.1);
  ${Item}:hover & {
    opacity: 0;
  }
  @media (min-width: 688px) {
    font-size: 1.3em;
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 9px 12px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: 992px) {
    font-size: 1.6em;
  }
  @media (min-width: 1312px) {
    font-size: 2em;
  }
  @media (min-width: 2560px) {
    font-size: 5em;
  }
`

// Begin Video Page Styles
export const NavWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2em;
  a {
    font-weight: 900;
    font-size: 1.5em;
    text-decoration: none;
    text-transform: uppercase;
    color: #333333;
    text-decoration: none;
    :hover {
      color: #bdc3c7;
    }
  }
  @media (min-width: 688px) {
    margin-top: 4em;
  }
  @media (min-width: 992px) {
    margin-top: 4em;
  }
  @media (min-width: 1312px) {
    margin-top: 4em;
  }
`

export const VideoWrapper = styled.div`
  margin: 1em 1em;
  @media (min-width: 688px) {
    margin: 1em 2em;
  }
  @media (min-width: 992px) {
    margin: 2em 5em;
  }
  @media (min-width: 1312px) {
    margin: 4em 8em;
  }
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
