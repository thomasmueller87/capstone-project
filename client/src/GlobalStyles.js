import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

:root {
    --background-nav: #ffffff;
    --background-title: #ffffff;
    --background-card: #ffffff;
    --background-place: #f6d8bb;
    --background-label: #ffffff;
    --title: #978f8f;
    --primary-nav: #0939B6;
    --primary-text: #000000;


    --fontsize-card-standard: 1.1rem;
    --fontweight-card-standard: bold;
    }

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    text-align: center;
        }

`;
