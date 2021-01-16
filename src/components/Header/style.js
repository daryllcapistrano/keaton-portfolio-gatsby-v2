import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  @media (min-width: 1312px) {
    flex-direction: row;
  }
`

export const InnerWrapper = styled.div`
  margin: 0 2em;
  @media (min-width: 1312px) {
    width: 100%;
    display: inline-flex;
    margin: 0 12em;
  }
`

export const LogoWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin: auto;
  @media (min-width: 1312px) {
    height: 150px;
    width: 150px;
  }
`

export const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1em;
  @media (min-width: 1312px) {
    justify-content: flex-end;
    margin: auto;
    font-size: 1.5em;
  }
  @media (min-width: 2560px) {
    font-size: 3em;
  }
  a {
    font-weight: 900;
    font-size: 0.75em;
    letter-spacing: 2px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    @media (min-width: 1312px) {
      margin-left: 3em;
    }
  }
`
