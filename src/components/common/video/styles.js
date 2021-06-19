import styled from "styled-components"

// Begin Video Page Styles sort this into proper folder structure
export const NavWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2em;
  a {
    display: flex;
    font-weight: 900;
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
export const IframeWrapper = styled.div`
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
