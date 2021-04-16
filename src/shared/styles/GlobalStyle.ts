import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  &:root {
    --primary: #252525;
    --white: #fbfbfb;
    --brand: palevioletred;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  svg {
    overflow: visible;
  }
`;

export default GlobalStyle;
