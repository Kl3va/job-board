import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

//JOBS CONTAINER
export const JobsContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const JobWrapper = styled.div`
  background: var(--color-bg-100);
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media ${QUERIES.tabletMini} {
    padding: 1.5rem;
  }

  & > p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  button {
    padding: 0.625rem 1.125rem;
  }

  & > span {
    padding: 0.625rem 1.125rem;
    max-width: 7.8rem;
  }
`
export const JobHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  position: relative;

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;

    h3 {
      font-size: 1.12rem;
    }

    p {
      font-size: 0.875rem;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  & > :nth-child(3) {
    align-self: center;
    display: flex;
    gap: 0.8rem;
    font-size: 0.7rem;

    @media screen and (min-width: 300px) {
      margin-left: auto;
      gap: 1rem;
      font-size: 0.9rem;
    }

    span {
      display: flex;
      gap: 0.3rem;
      align-items: center;
    }
  }
`

export const JobAboutContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  span {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    font-size: 1rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const JobAboutSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  & > span {
    display: flex;
    align-items: center;
    font-size: 0.7rem;

    @media ${QUERIES.tabletMini} {
      font-size: 1rem;
    }
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    & > div {
      padding: 0.125rem 0.625rem 0.125rem 0.5rem;
      display: flex;
      gap: 0.18rem;
      border-radius: 1rem;
      background: var(--color-accent-300);

      p {
        font-size: 0.7rem;
        line-height: 1;

        &::first-letter {
          text-transform: uppercase;
        }

        @media ${QUERIES.tabletMini} {
          font-size: 0.875rem;
        }
      }

      div {
        display: flex;
        align-self: center;
      }
    }
  }
`
