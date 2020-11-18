import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }


  html, body, input, button{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 62.5%;
  }

  cursor: pointer;
`;
