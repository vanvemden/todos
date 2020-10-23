import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    color: #424147;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #ece9e0;
    min-height: 100%;
    min-width: 100%;
  }

`;

export default GlobalStyle;
