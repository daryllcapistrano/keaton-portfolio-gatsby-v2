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
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 1312px) {
    justify-content: normal;
  }
`

export const Video = styled.video`
  width: 20%;
  @media (min-width: 688px) {
    width: 15%;
  }
`

export const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1em;

  a {
    font-weight: 400;
    font-size: 0.75em;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    &:not(:last-child) {
      margin-right: 3em;
    }
  }
  @media (min-width: 1312px) {
    justify-content: flex-end;

    margin: auto;
  }
`
