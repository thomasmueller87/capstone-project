import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

:root {
    --background-nav: #ffffff;
    --background-header: #ffffff;
    --background-card: #ffffff;
    --background-card-air: #e3fbe0;
    --background-card-notes: #fafbe0;
    --background-card-place: #f6d8bb;
    --background-card-label: #ffffff;
    --title: #978f8f;
    --primary-color: #0939B6;
    --primary-text: #000000;


    --fontsize-card-standard: 1.1rem;
    --fontweight-card-standard: bold;

    --fontsize-card-notes: 1rem;
    --fontweight-card-notes: normal;
    }

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    text-align: center;
        }

`;
