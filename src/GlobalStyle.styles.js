import { createGlobalStyle, css } from 'styled-components';

const FontFaces = css`
    @font-face {
        font-family: 'StratosSkyeng';
        src:
            local('StratosSkyeng'),
            local('StratosSkyeng'),
            url('fonts/StratosSkyeng.woff2') format('woff2'),
            url('fonts/StratosSkyeng.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;

const GlobalStyle = createGlobalStyle`
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
  color:rgb(214 214 214);
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
  transition: all 0.1s ease;
  text-decoration: underline;
}
a:hover {
  transition: all 0.4s ease;
  color: rgba(255, 255, 255, 0.6);  
  text-decoration: none;

}
input, button {
  border:none;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}
${FontFaces}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
  background-color: rgb(132 132 132);
}
`;
export default GlobalStyle;
