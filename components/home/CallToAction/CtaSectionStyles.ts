import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const CtaMainSection = styled.section`
  background: var(--color-bg-200);
`

export const CtaContainer = styled.div`
  width: min(90%, var(--max-container));
  margin-inline: auto;
  text-align: center;
  padding-block: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 55ch;
    margin-block: 1.25rem 2.5rem;
  }

  h2 {
    font-weight: 600;
  }

  a {
    justify-self: center;
  }

  @media ${QUERIES.tablet} {
    padding-block: 6rem;
  }
`
