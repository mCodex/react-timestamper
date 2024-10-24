import { Lato } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${lato.style.fontFamily};
  }

  html, body, #__next {
    height: 100%;
  }
  
  body {
    background: #3C3845;
    color: #FFF;
    -webkit-font-smoothing: antialised;
  }

  #root {
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
