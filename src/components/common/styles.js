import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Poppins, sans-serif;
    background-color: #ffffff
  }
`
// common styled-components
export const Wrapper = styled.div`
  @media screen and (max-width: 425px) {
    padding: 5% 5%;
  }
  @media screen and (min-width: 2560px) {
    padding: 5% 20%;
  }
  padding: 5% 15%;
`

// Logo styles
export const LogoWrapper = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 1em 0 0 0;
  }
  margin: 0 0 1em 0;
`

export const GifLogo = styled.img`
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  width: 25%;
`
