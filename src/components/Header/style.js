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
  a {
    font-weight: 900;
    letter-spacing: 1.6px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
`
