import styled from "styled-components"

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1.5em;
  @media (min-width: 688px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5em;
  }
  /* @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.75em;
  }
  @media (min-width: 1312px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1em;
  } */
`
export const GridItem = styled.div`
  position: relative;
`
export const Item = styled.div`
  position: relative;
`

// Begin Video Page Styles
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
