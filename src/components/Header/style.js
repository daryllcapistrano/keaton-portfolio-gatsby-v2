import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Video = styled.video`
  width: 25%;
`

export const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1em;
  padding: 0 1.5em;
  a {
    font-weight: 400;
    font-size: 0.75em;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
`
