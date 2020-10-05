import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%; // 1rem = 10px; (10 / 16) * 100 == 62.5%;
  box-sizing: border-box;

  /* @media only screen and(min-width: ) {
    font-size: 50%; // 1rem = 8px; (8 / 16) * 100 = 50%
  } */
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body{
  font-family: 'Roboto', sans-serif;
}

.container{
  max-width: 90%;
  margin: auto;

  @media(min-width: 1366px){
    max-width: 1300px;
  }
}

.react-sweet-progress-line-inner{
  max-width: 100% !important;
}
`;
