import styled, { createGlobalStyle, css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'
import { ThemeTypes } from 'styles/theme'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeTypes }>`
    :root {
        --color-bg-100: ${(props) => props.theme.bg100};
        --color-bg-200: ${(props) => props.theme.bg200};
        --color-bg-300: ${(props) => props.theme.bg300};
        --color-accent-100: ${(props) => props.theme.accent100};
        --color-accent-200: ${(props) => props.theme.accent200};
        --color-accent-300: ${(props) => props.theme.accent300};
        --color-accent-400: ${(props) => props.theme.accent400};
        --color-font-100: ${(props) => props.theme.font100};
        --color-font-200: ${(props) => props.theme.font200};
        --color-font-300: ${(props) => props.theme.font300};
        --color-font-400: ${(props) => props.theme.font400};
        --color-font-500: ${(props) => props.theme.font500};
        --color-font-600: ${(props) => props.theme.font600};
        --color-border-100: ${(props) => props.theme.border100};
        --font-pry-100: 'Inter', sans-serif;
        --max-container: 76rem;
        --center-container: 0 auto;
        --border-radius: 0.5rem;
        --transition: all 0.5s;
        --section-space: 0rem 1.2rem;
        --box-shadow-100: ${(props) => props.theme.shadow100};
        --box-shadow-200: ${(props) => props.theme.shadow200};
        --box-shadow-300: ${(props) => props.theme.shadow300};
        --color-scroll-bar: ${(props) => props.theme.scrollBar100};
        --gradient-100: linear-gradient(19deg, #B721FF 0%, #21D4FD 1%, #356df3 78%, #356df3 95%);
        --gradient-200: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        --gradient-bg-100: #b721ff;
        --gradient-bg-200:#4158d0;
    }

    html {
        scrollbar-width: none;
        font-size: 100%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
}

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
    li {
        list-style: none;
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-scroll-bar);
      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100vw;
      margin: 1px;
    }

    @supports (scrollbar-color: var(--color-scroll-bar) var(--color-scroll-bar)) {
      * {
        scrollbar-color: var(--color-scroll-bar) transparent;
        scrollbar-width: thin;
      }
    }

    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
      }
      *,
      *::before,
      *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
      }
    }

    body {
        font-family: var(--font-pry-100);
        font-weight: 400;
        background-color: var(--color-bg-100);
        color: var(--color-font-100);
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 100vh;
        max-width: 100vw;
    }

    a {
      text-decoration: none;
      font-size: 1rem;
      color: var(--color-font-100);
      font-weight: 400;
      transition: var(--transition);
      font-family: inherit;
    }

    p {
      color: var(--color-font-100);
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }



    h1, h2, h3 {
       text-transform: capitalize;
       color: var(--color-font-200);
    }

    h1 {
      font-size: clamp(2rem, calc(2.5vw + .5rem), 3rem);
     //font-size: 3rem;
      line-height: 2.3rem;
      font-weight: 500;
      
      @media ${QUERIES.tabletMini} {
        line-height: 3rem;
      }

      @media ${QUERIES.desktop} {
        line-height: 3.75rem;
      }
    }

    h2 {
      
      font-size: 1.7rem;
      font-weight: 600;
      line-height: 2rem;
      letter-spacing: -0.045rem;

      @media ${QUERIES.desktop} {
        line-height: 2.25rem;
      }
    }

    i:hover {
      background-color: var(--color-accent-100);
      background-image: var(--color-accent-100);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }

   /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
    
`

export const HiddenHeader = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`

export const Main = styled.main`
  min-height: 100vh;
`
