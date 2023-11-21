import styled, { css } from 'styled-components'

export const JobHeaderInner = styled.div`
  min-height: 5rem;
  width: min(90%, var(--max-container));
  margin-inline: auto;
  display: flex;
  gap: 2.5rem;
  align-items: center;
`

export const JobHeaderNav = styled.nav`
  display: flex;

  @media screen and (max-width: 972px) {
    display: none;
  }
`

export const JobHeaderLists = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const JobHeaderLink = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: var(--color-accent-100);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      a {
        color: var(--color-accent-100);
      }
    `}
`

export const JobHeaderSearchWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-left: auto;
  flex: 1;
  justify-content: end;

  i {
    background-color: var(--color-font-500);
    background-image: var(--color-font-500);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

export const JobHeaderProfile = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  p {
    color: var(--color-bg-400);
    font-size: 1rem;
    font-weight: 500;

    @media screen and (max-width: 590px) {
      display: none;
    }
  }
`

export const JobSearchIconWrapper = styled.div`
  position: relative;
  flex-basis: 50%;

  @media screen and (max-width: 590px) {
    flex-basis: 80%;
  }

  i {
    position: absolute;
    top: 0.85rem;
    left: 1rem;

    @media screen and (max-width: 450px) {
      font-size: 0.7rem;
      left: 0.5rem;
    }
  }

  input {
    padding-inline: 2.5rem 0;
    font-size: 1rem;
    width: 100%;

    @media screen and (max-width: 450px) {
      font-size: 0.7rem;
      padding-left: 1.5rem;
    }
  }
`
