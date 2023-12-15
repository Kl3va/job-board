import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const FindJobHomeMain = styled.main`
  padding-block: 2.5rem;

  display: grid;
  gap: 1rem;

  & > section {
    background: var(--color-bg-500);
    // width: min(90%, 64.31rem);
    width: min(90%, 77.5rem);
    margin-inline: auto;
    border-radius: 0.5rem;
    padding: 0.5rem;

    @media ${QUERIES.tabletMini} {
      padding: 1rem 1.5rem;
    }
  }

  i {
    background-color: var(--color-font-500);
    background-image: var(--color-font-500);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`
