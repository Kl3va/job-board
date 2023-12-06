import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const RoutePopupContainer = styled.aside`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90%, 35.75rem);
  height: 23.625rem;
  padding: 1.5rem;

  background: #ffffff;
  z-index: 3000;
  border-radius: 0.75rem;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  display: grid;
  gap: 1.5rem;

  h2 {
    font-size: 1.2rem;
    line-height: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media ${QUERIES.tabletMini} {
      font-size: 1.5rem;
    }
  }

  i {
    background-color: var(--color-accent-200);
    background-image: var(--color-accent-200);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 1.5rem;
  }
`

export const RoutePopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.875rem;

    @media ${QUERIES.tabletMini} {
      font-size: 1rem;
    }
  }
`

export const RoutePopupPath = styled.div`
  display: flex;
  gap: 1rem;

  @media ${QUERIES.tabletMini} {
    gap: 1.5rem;
  }

  & > * {
    flex: 1;
  }
`

export const SinglePopupPath = styled.div`
  border-radius: 0.75rem;
  border: 1px solid var(--color-accent-200);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 9.9375rem;
  transition: 0.2s all ease-out;

  p {
    font-weight: 500;
    color: var(--color-font-200);
  }

  &:hover {
    box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
      0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  }
`
