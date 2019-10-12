import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --docs-font-family: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif';
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
  
  /* Custom scrollbar */

  ::-webkit-scrollbar {
    height: 16px;
    width: 16px;
    overflow: visible;
  }

  ::-webkit-scrollbar-button {
    height: 0px;
    width: 0px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
    min-height: 28px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    /* border-width: 1px 1px 1px 6px; */
    padding: 100px 0px 0px;
    background-color: rgb(218, 220, 224);
    box-shadow: none;
    border-width: 4px;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #888;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    margin: 0px 4px;
    background-clip: padding-box;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-width: 0px 0px 0px 4px;
  }
 
`;

export default GlobalStyle;
