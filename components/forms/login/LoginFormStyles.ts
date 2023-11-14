import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;

  @media ${QUERIES.tablet} {
    font-size: 0.875rem;
  }

  a {
    font-weight: 500;
    font-size: inherit;
    color: var(--color-accent-100);
  }
`

export const CheckboxLabel = styled.label`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: var(--color-font-400);
  font-weight: 500;
`

export const InputCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--color-bg-100);
  margin: 0;
  font: inherit;
  color: var(--color-accent-100);
  min-width: 1rem;
  height: 1rem;
  border: 0.15rem solid var(--color-accent-200);
  border-radius: 0.15rem;
  display: block;
  transform: translateY(-0.07rem);

  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--color-accent-100);

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked::before {
    transform: scale(1);
  }

  &:checked {
    border: 0.1rem solid var(--color-accent-100);
  }
`
