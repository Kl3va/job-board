import styled, { css, keyframes } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const LogoSection = styled.section`
  margin-block: 4rem;
`

export const LogosContainer = styled.div`
  border-bottom: 1px solid var(--color-border-100);

  width: min(90%, var(--max-container));
  margin-inline: auto;
  padding-bottom: 6rem;
  border-bottom: 1px solid var(--color-border-100);

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
`

export const LogosAnimationWrapper = styled.div<{ itemNumber?: number }>`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  justify-content: center;
`
