import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const JobHomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
  }
`

export const JobHomeHeaderBtnWrapper = styled.div`
  display: flex;
  gap: 0.4rem;

  button {
    padding-inline: 0.875rem;
    display: flex;
    place-items: center;
  }
`

export const JobHomeNoJobContainer = styled.div`
  padding-block: 3.25rem;
  text-align: center;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-200);

  display: grid;
  justify-items: center;

  @media ${QUERIES.tabletMini} {
    padding-block: 6.25rem;
  }

  & > span {
    margin-bottom: 0.5rem;
    border-radius: 50%;
    width: 3rem;
    aspect-ratio: 1 / 1;
    border: 8px solid var(--color-bg-200);
    background: var(--color-bg-300);

    display: grid;
    place-items: center;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  div {
    width: min(100%, 22rem);
  }
`
