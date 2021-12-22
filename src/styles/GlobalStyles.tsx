// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-ExtraBold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-ExtraBoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-ExtraLightItalic.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
      font-display: swap;
  }

   /* Hide scrollbar for Chrome, Safari and Opera */

  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    max-width:100%;  /* added */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  }
  body {
    max-width: 100vw;
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #1B1E2A;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
  isolation: isolate;
}`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
