import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'
import { motion } from 'framer-motion'

interface ServiceFaqStylesTypes {
  faqToggle?: boolean
}

export const FaqSection = styled.section`
  margin-block: 10rem;

  @media ${QUERIES.tablet} {
    margin-block: 10rem 15rem;
  }
`

export const FaqContainer = styled.div`
  margin: var(--center-container);
  width: min(89.61%, var(--max-container));
  font-family: var(--font-pry-100);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${QUERIES.tablet} {
    flex-direction: row;
    gap: 7.5rem;
  }
`

export const FaqMainHeader = styled.div`
  h2 {
    text-align: center;
    text-transform: capitalize;
    font-size: 2rem;
    line-height: 1;

    @media ${QUERIES.tablet} {
      text-align: left;
      font-size: 2.8rem;
    }
  }
`

export const FaqWrap = styled.ul`
  max-width: 100%;
  min-height: 16.25rem;

  display: grid;
  gap: 1.56rem;
`

export const FaqItem = styled.li`
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;

  @media ${QUERIES.mobile} {
    padding: 2rem 2.5rem;
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
    font-size: 1rem;
    font-weight: 400;

    @media ${QUERIES.mobile} {
      font-size: 1.5rem;
    }

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
    background-color: var(--color-font-100);
    background-image: var(--color-font-100);
    -webkit-text-fill-color: var(--color-font-100);
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
  }
`
