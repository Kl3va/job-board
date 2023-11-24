import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const JobHubProfileSection = styled.section`
  background-image: linear-gradient(#2d3282 20%, transparent 20%);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  padding-block: 10rem 2rem;
`

export const JobHubProfileContainer = styled.div`
  width: min(90%, 58.75rem);
  margin-inline: auto;
  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--color-border-200);
  background: var(--color-bg-500);

  @media ${QUERIES.tablet} {
    padding: 1.5rem 3rem;
  }
`

export const JobHubProfileInfo = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin-bottom: 1.5rem;

  @media ${QUERIES.tabletMini} {
    gap: 1.5rem;
  }

  & > :first-child {
    max-width: 4rem;

    @media ${QUERIES.tabletMini} {
      max-width: 100%;
    }
  }

  & > :last-child {
    h2 {
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.015rem;
      margin-bottom: 0.2rem;

      @media ${QUERIES.tabletMini} {
        font-size: 1.5rem;
      }
    }
  }
`

export const JobRoleSpan = styled.div`
  padding: 0.125rem 0.625rem 0.125rem 0.5rem;
  display: flex;
  gap: 0.18rem;
  border-radius: 1rem;
  background: var(--color-accent-300);
  width: fit-content;

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
`

export const JobHubProfileHeader = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 0.875rem;
    display: flex;
    gap: 0.5rem;
    span {
      color: #1d2939;
    }
  }
`

export const JobHubProfileSummary = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background: rgba(242, 244, 247, 0.5);

  p {
    font-size: 0.875rem;
  }

  @media ${QUERIES.tabletMini} {
    padding: 1rem 1.5rem;
  }
`
