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
    --background-card-label: #6b6b6b;
    --card-label-text-color: #ffffff;
    --background-card-air: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(202, 250, 196, 1) 100%
  );
    --background-card-notes: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(250, 251, 224, 1) 100%
  );    
    --background-card-place: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    #f6d8bb 100%
  );    
    --background-card-water: 
    linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(195, 218, 255, 1) 100%
  );
    --background-card-buddy: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(219, 219, 219, 1) 100%
  );
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
