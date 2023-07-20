import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
     box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  
  @font-face {
    font-family: 'StratosSkyeng';
    src: local("StratosSkyeng"), local("StratosSkyeng"), url("../fonts/Stratos-Regular.woff2") format("woff2"), url("../fonts/Stratos-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'StratosSkyeng', sans-serif;   

  }

  `;
