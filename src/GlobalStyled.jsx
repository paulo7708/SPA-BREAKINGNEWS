import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    width: auto;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
  }
`

