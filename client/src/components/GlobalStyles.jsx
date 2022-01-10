import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

:root {
    --background-nav: #dfdfdf;
    --primary-nav: #0939B6;
    --primary-text: #000000;
    }

html {
    height: 100%;
}

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    text-align: center;
    overflow: hidden;
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: linear-gradient(15deg, rgba(79,172,254,1) 0%, rgba(0,242,254,1) 100%);
    }


`;
