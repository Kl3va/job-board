import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const FindJobDetailJobRole = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-font-200);
  }

  & > p {
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  & > span {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const JobRoleHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;

    h3 {
      font-size: 1.12rem;
      color: var(--color-font-200);
      font-weight: 500;
    }

    p {
      font-size: 0.875rem;
    }
  }
`

export const JobRoleSpecifics = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  & > div {
    padding: 0.125rem 0.625rem 0.125rem 0.5rem;
    display: flex;
    gap: 0.18rem;
    border-radius: 1rem;
    background: var(--color-accent-300);

    p {
      font-size: 0.7rem;
      line-height: 1;

      @media ${QUERIES.tabletMini} {
        font-size: 0.875rem;
      }
    }

    div {
      display: flex;
      align-self: center;
    }
  }
`

export const JobRoleRenumeration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  p {
    font-size: 1rem;
  }
`

export const JobRoleListContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 1rem;
  }
`

export const JobRoleUnorderedList = styled.ul`
  display: grid;
  line-height: 1.2rem;
  padding-left: 1.3rem;

  li {
    list-style-type: disc;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  @media ${QUERIES.tablet} {
    line-height: 1.5rem;
  }
`

export const JobRoleCoreList = styled.div`
  display: grid;
  gap: 1.2rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;

    span {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      background: var(--color-bg-300);
      color: var(--color-font-300);
      font-size: 0.875rem;
    }
  }
`
