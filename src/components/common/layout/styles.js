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
    min-height: 100vh;
    padding: 0em 1.5em 12em;
    @media (min-width: 688px) {
      padding: 0em 4em 12em;
    }
    @media (min-width: 992px) {
      padding: 0em 6em 12em;
    }
  }
`
