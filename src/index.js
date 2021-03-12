import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b3ffff;
    width: 100%;
    height: 100%;
  }

`;

ReactDOM.render(<div><GlobalStyle /><App /></div>, document.getElementById("root"));