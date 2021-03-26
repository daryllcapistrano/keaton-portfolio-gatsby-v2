import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 1em 2em;
  @media (min-width: 1312px) {
    flex-direction: row;
    margin: 1em 12em;
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
  }
  a {
    font-weight: 600;
    font-size: 0.8em;
    letter-spacing: 2px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    @media (min-width: 1312px) {
      margin-left: 3em;
    }
  }
`
