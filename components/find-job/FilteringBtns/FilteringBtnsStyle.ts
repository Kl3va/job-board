import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const FilterSection = styled.section`
  overflow: scroll;
`

export const FilterContainer = styled.div`
  display: flex;
  //width: 60.31rem;
  width: 74.5rem;
  overflow: scroll;
  //gap: 1rem;

  button {
    margin-left: -1.5rem;
    width: 10.85rem;

    display: grid;
    place-items: center;
  }
`

export const FilterBtnLists = styled.ul`
  display: flex;
  overflow: scroll;
  // gap: 1rem;
`
export const FilterBtn = styled.li`
  //width: 12.5rem;
  width: 15.5rem;
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

  &:first-child {
    pointer-events: none;
  }

  &:not(:first-child) {
    margin-left: -1.5rem;
    flex-direction: row-reverse;
  }
`
