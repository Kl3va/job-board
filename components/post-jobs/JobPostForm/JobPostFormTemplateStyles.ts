import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const JobPostFormContainer = styled.div`
  width: min(90%, 62.75rem);
  margin: 2rem auto;
  padding: 0.5rem;

  border-radius: 0.5rem;
  border: 1px solid var(--color-border-200);
  background: #ffffff;

  display: grid;
  gap: 1rem;

  h2 {
    font-size: 1.125rem;
  }

  @media ${QUERIES.tabletMini} {
    padding: 2rem;
  }
`

export const JobPostFormHeader = styled.div`
  padding-block: 1rem;
  border-radius: 0.5rem;
  background: var(--color-bg-500);

  display: flex;
  justify-content: flex-end;

  a {
    border-radius: 0.5rem;
    padding: 0.625rem 1rem;
    border: 1px solid var(--color-bg-300);
    background: var(--color-bg-300);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    font-size: 0.875rem;
  }
`

export const JobPostMainFormContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-bg-300);

  display: grid;
  gap: 2rem;

  @media ${QUERIES.tablet} {
    padding: 2rem;
  }
`

export const JobPostFormInputs = styled.form`
  display: grid;
  gap: 1.25rem;

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
`
