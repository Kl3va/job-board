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
    margin-block: 6rem;
  }
`

export const HeroContainer = styled.div`
  width: min(90%, var(--max-container));
  margin-inline: auto;
  text-align: center;
  padding-bottom: 6rem;
  border-bottom: 1px solid var(--color-border-100);

  display: grid;
  justify-items: center;

  a {
    margin-bottom: 1rem;
  }

  h1 {
    margin-block: 1.5rem;
    max-width: 35ch;
    letter-spacing: -0.06rem;
  }
`

export const HeroText = styled.p`
  margin-bottom: 3rem;
  max-width: 60ch;
`

export const HeroBtnWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media ${QUERIES.tablet} {
    margin-bottom: 6rem;
  }
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
