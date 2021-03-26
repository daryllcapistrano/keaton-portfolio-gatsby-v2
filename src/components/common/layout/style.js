import { createGlobalStyle } from "styled-components"

import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/800.css"

export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }
  body{
    font-family: "Poppins", sans-serif;
    position: relative;
    background-color:#FCFCFC;
    color: #010101;
  }
  main {
    height: 100%;
    min-height: 100vh;
    padding: 1.5em 1.5em 12em;
    @media (min-width: 688px) {
      padding: 2em 4em 12em;
    }
    @media (min-width: 992px) {
      padding: 2em 12em 12em;
    }
  }
`
