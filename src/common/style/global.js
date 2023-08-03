import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
  }

  *{
    font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Raleway', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  h1{
    font-family: Raleway;
    font-size: 35px;
    line-height: 41px
    font-weight: 700;
  }

  h2{
    font-family: Raleway;
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
  }

  h3{
    font-family: Raleway;
    font-size: 12px;
    line-height: 14px
    font-weight: 800;
  }

  a{
    color: inherit;
    text-decoration:none;
  }

  :root{
    --black: #000;
    --white: #FFF;
    
    --gray-500: #909090;
    --gray-400: #C4C4C4; 
    --gray-300: #D7D7D7;
  }





`

export default GlobalStyle;