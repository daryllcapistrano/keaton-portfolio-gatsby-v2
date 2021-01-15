import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins/400.css" // Weight 400.
import "@fontsource/poppins/900.css" // Weight 900.

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Poppins", sans-serif;
    background-color:#FCFCFC;
    color: #010101;
  }
  main {
    height: 100%;
    min-height: 100vh;
  }
`
