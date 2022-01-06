import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${props => props.theme.fontColor};
  }
  body {
    background-color: ${props => props.theme.dark}
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
`
