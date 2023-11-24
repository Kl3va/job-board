import styled from 'styled-components'

export const EditCvFormComponent = styled.form`
  display: grid;
  gap: 1.5rem;

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

  & > :last-child {
    margin-top: 1rem;
  }
`
