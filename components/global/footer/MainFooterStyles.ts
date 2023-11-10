import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const HomeFooter = styled.div`
  width: min(90%, var(--max-container));
  margin-inline: auto;
  padding-block: 4rem 3rem;

  display: flex;
  gap: 1.5rem;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.mobile} {
    flex-direction: row;
    gap: none;
  }
`
