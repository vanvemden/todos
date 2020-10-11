import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500,700);

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #ece9e0;
    min-height: 100%;
    min-width: 100%;
  }

`;

export default GlobalStyle;
