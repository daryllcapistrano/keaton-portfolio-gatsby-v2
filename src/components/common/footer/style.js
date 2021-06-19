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
  background-color: lightgrey;
  p {
    font-size: 80%;
  }
`
