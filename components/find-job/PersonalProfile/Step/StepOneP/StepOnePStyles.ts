import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const StepFormContainer = styled.form`
  width: min(90%, 26.87rem);

  display: grid;
  gap: 1rem;

  input,
  select,
  textarea {
    padding: 0.53rem 0.74rem;
    border-radius: 0.42rem;
    border: 0.84px solid var(--color-accent-200);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    background: var(--color-bg-100);
  }

  p {
    font-size: 0.875rem;
    color: var(--color-font-100);
    font-weight: 500;
  }

  button {
    margin-top: 1.5rem;
  }
`

export const StepInputWrapper = styled.div`
  display: grid;
  gap: 0.3rem;
`

export const StepSelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const StepDoubleInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${QUERIES.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`
