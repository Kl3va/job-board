import styled from 'styled-components'

export const FilterMenuContainer = styled.div`
  position: absolute;
  display: grid;
  width: min(95%, 15rem);
  align-items: flex-start;
  z-index: 3000;
  border-radius: 0.75rem;
  background: #ffffff;

  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  label {
    cursor: pointer;

    padding: 0.625rem 1rem;

    display: flex;
    gap: 0.75rem;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-border-200);
    }
  }
`
