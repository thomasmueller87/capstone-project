import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

:root {
    --background-nav: #ffffff;
    --background-nav-active-fallback: red;
    --background-nav-active: linear-gradient(
      180deg,
      rgba(255, 0, 0, 0) 10%,
      rgba(255, 0, 0, 0.8) 100%
    );

    --background-header: #ffffff;

    
    --background-card: #ffffff;
    --background-card-air: #e3fbe0;
    --background-card-notes: #fafbe0;
    --background-card-place: #f6d8bb;
    --background-card-label: #ffffff;
    --background-card-water: #e0f3fb;
    --background-card-buddy: #ffffff;
    --title-text: #978f8f;
    --primary-color: #0939B6;
    --primary-text: #000000; // Main color for Text


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

input, textarea {
    font-family: 'Roboto Mono', monospace;
    color: var(--primary-color);
}

.popup-content {
  margin: auto;
  background: rgb(255, 255, 255);
  width: 70%;
  padding: 5px;
}
.popup-arrow {
  color: rgb(255, 255, 255);
}
[role='tooltip'].popup-content {
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
}

.popup-overlay {
  background: rgba(0, 0, 0, 0.5);
}
[data-popup='tooltip'].popup-overlay {
  background: transparent;
}


`;
