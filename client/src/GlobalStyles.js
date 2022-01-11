import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

:root {
    --background-nav: #ffffff;
    --background-title: #ffffff;
    --title: #978f8f;
    --primary-nav: #0939B6;
    --primary-text: #000000;
    }

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    text-align: center;
        }

`;
