import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const AboutMainSection = styled.section`
  margin-block: 4rem;

  @media ${QUERIES.tablet} {
    margin-block: 6rem;
  }
`

export const AboutContainer = styled.div`
  width: min(90%, var(--max-container));
  margin-inline: auto;
  text-align: center;
  padding-bottom: 6rem;
  border-bottom: 1px solid var(--color-border-100);

  & > h3 {
    color: var(--color-font-300);
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
  }

  h2 {
    margin-bottom: 4rem;
    max-width: 35ch;
    margin-inline: auto;
  }
`

export const AboutServices = styled.div`
  display: grid;
  gap: 2rem;

  @media ${QUERIES.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  h3 {
    margin-block: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
  }
`
