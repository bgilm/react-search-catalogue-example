import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

 * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body { 
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    height: 100vh;
  }
`;

export default GlobalStyles;
