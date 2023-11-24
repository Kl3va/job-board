import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const ApplyNowContainer = styled.div`
  width: min(90%, 58.75rem);
  margin: 2rem auto;
  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--color-border-200);
  background: var(--color-bg-500);

  @media ${QUERIES.tablet} {
    padding: 2rem 3.25rem;
  }
`
export const ApplyNowHeader = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 500;
  }

  div {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  span {
    font-size: 0.875rem;
  }
`

export const MultiBtnsWrapper = styled.main`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
`
