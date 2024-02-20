import styled, { css, keyframes } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

//ANIMATION FOR LOGOS
const scrollAnimation = keyframes`

    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-20%);
    }
    
`

export const HeroMainSection = styled.section`
  margin-block: 4rem;

  @media ${QUERIES.tablet} {
    margin-block: 4.5rem;
  }
`

export const HeroContainer = styled.div`
  width: min(90%, var(--max-container));
  margin-inline: auto;
  padding-bottom: 6rem;
  border-bottom: 1px solid var(--color-border-100);

  display: grid;

  justify-items: center;

  a {
    margin-bottom: 1rem;
  }

  h1 {
    max-width: 35ch;
    letter-spacing: -0.06rem;
  }

  @media ${QUERIES.tablet} {
    grid-template-columns: 1fr 0.7fr;
  }
`

export const HeroContainerText = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media ${QUERIES.tablet} {
    text-align: left;
    align-items: flex-start;
    justify-content: center;
  }
`

export const HeroText = styled.p`
  margin-bottom: 1rem;
  max-width: 60ch;
`

export const HeroCompanyText = styled.p`
  margin-bottom: 2.6rem;
  font-size: 1rem;
`

export const LogoContainer = styled.div`
  max-width: var(--max-container);
  overflow-x: hidden;
  white-space: nowrap;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    var(--color-border-100) 20%,
    var(--color-border-100) 80%,
    transparent
  );
  mask: linear-gradient(
    90deg,
    transparent,
    var(--color-border-100) 20%,
    var(--color-border-100) 80%,
    transparent
  );
`

export const LogosWrapper = styled.div`
  width: fit-content;

  animation: ${scrollAnimation} 5s linear infinite running;

  div {
    width: 10rem;
    display: inline-block;
  }
`
