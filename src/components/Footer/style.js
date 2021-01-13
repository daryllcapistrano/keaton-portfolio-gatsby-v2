import styled from "styled-components"

export const StyledFooter = styled.footer`
  height: 2.5em;
  position: relative;
`

export const InnerWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5em;
  justify-content: center;
  font-size: small;
  background-color: lightgrey;
  p {
    color: #0f0e0e;
    align-self: center;
    font-size: 50%;
  }
`
