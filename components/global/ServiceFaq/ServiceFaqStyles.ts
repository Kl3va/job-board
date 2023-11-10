import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'
import { motion } from 'framer-motion'

interface ServiceFaqStylesTypes {
  faqToggle?: boolean
}

export const FaqSection = styled.section`
  margin-block: 4rem;

  @media ${QUERIES.tablet} {
    margin-block: 6rem;
  }
`

export const FaqContainer = styled.div`
  margin: var(--center-container);
  width: min(89.61%, 48rem);

  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const FaqMainHeader = styled.div`
  display: grid;
  gap: 1.25rem;

  h2 {
    text-align: center;
    line-height: 2rem;
  }

  p {
    text-align: center;
  }
`

export const FaqWrap = styled.ul`
  max-width: 100%;
  min-height: 16.25rem;

  display: grid;
`

export const FaqItem = styled.li`
  // border-radius: 1.25rem;
  // background: rgba(255, 255, 255, 0.08);
  padding-block: 1rem;
  border-bottom: 1px solid var(--color-border-100);

  @media ${QUERIES.mobile} {
    padding-block: 2rem;
  }
`

export const FaqHeader = styled.div`
  padding: 0.62rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  h3 {
    text-transform: lowercase;
    font-size: 1.125rem;
    font-weight: 400;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  span {
    display: grid;
    place-items: center;
    height: 100%;
  }

  i {
    background-color: var(--color-accent-100);
    background-image: var(--color-accent-100);
    -webkit-text-fill-color: var(--color-accent-100);
    -webkit-background-clip: text;
    transform: translateY(2px);
  }

  div:first-child {
    min-width: 1.875rem;
  }
`

export const FaqBody = styled(motion.div)<ServiceFaqStylesTypes>`
  padding-inline: 0.62rem;
  overflow: hidden;

  p {
    padding-block: 0.125rem;
    font-size: 1rem;
  }
`
