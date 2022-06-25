import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --body-bg-color: #22212C;
  --text-color: #837E9F;
}

* {
margin: 0;
padding: 0;
font-family: 'Merriweather Sans', sans-serif;
box-sizing: border-box;
color: var(--text-color);
}
body {
  background-color: var(--body-bg-color);
}
html {
  @media (max-width:1080px){
    font-size: 93.75%;
  }
  @media (max-width:720px){
    font-size: 87.5%;
  }
}
`