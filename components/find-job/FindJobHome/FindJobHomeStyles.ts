import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const FindJobHomeMain = styled.main`
  padding-block: 2.5rem;

  display: grid;
  gap: 1rem;

  & > * {
    background: var(--color-bg-500);
    width: min(90%, 64.31rem);
    margin-inline: auto;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
  }

  i {
    background-color: var(--color-font-500);
    background-image: var(--color-font-500);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`
export const FilterSection = styled.section`
  overflow: scroll;
`

export const FilterContainer = styled.div`
  display: flex;
  width: 60.31rem;
  overflow: scroll;

  button {
    margin-left: -1.5rem;
    width: 7.85rem;

    display: grid;
    place-items: center;
  }
`

export const FilterBtnLists = styled.ul`
  display: flex;
  overflow: scroll;
`
export const FilterBtn = styled.li`
  width: 12.5rem;
  height: 2.7rem;
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 0.5rem;
  border: 2px solid var(--color-accent-200);

  background: var(--color-bg-100);

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  &:not(:first-child) {
    margin-left: -1.5rem;
    flex-direction: row-reverse;
  }
`

//JOBS CONTAINER
export const JobsContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const JobWrapper = styled.div`
  background: var(--color-bg-100);
  padding: 1.5rem;
  border-radius: 0.5rem;

  & > p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.625rem 1.125rem;
  }
`
export const JobHeader = styled.div`
  display: flex;
  gap: 0.5rem;

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
    }
  }

  & > :nth-child(3) {
    margin-left: auto;
    align-self: center;
    display: flex;
    gap: 1.5rem;

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
  }
`

export const JobAboutSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > span {
    display: flex;
    align-items: center;
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
        font-size: 0.875rem;
      }

      div {
        display: flex;
        align-self: center;
      }
    }
  }
`
