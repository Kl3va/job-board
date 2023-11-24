import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const FindJobDetailPageMain = styled.main`
  width: min(90%, 77.5rem);
  margin-inline: auto;
  padding-block: 2rem;

  display: grid;
  gap: 2rem;

  & > * {
    border-radius: 0.5rem;
    border: 1px solid #f2f4f7;
    background: #fcfcfd;
    width: 100%;
    padding: 0.5rem;

    @media ${QUERIES.tablet} {
      padding: 2rem;
    }
  }

  @media ${QUERIES.tablet} {
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-rows: 35rem auto;
  }

  @media ${QUERIES.desktop} {
    grid-template-columns: 49.125rem 1fr;
  }

  & > :nth-child(1) {
    @media ${QUERIES.tablet} {
      grid-row: 1 / 3;
    }
  }

  & > :nth-child(3) {
    @media ${QUERIES.tablet} {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      height: 39rem;
    }
  }

  i {
    background-color: var(--color-font-500);
    background-image: var(--color-font-500);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

// & > * {
//     background: var(--color-bg-500);
//     width: 50%;
//     // margin: 2rem auto;
//     border-radius: 0.5rem;
//     padding: 0.5rem;
//    // border: 1px solid red;

//     @media ${QUERIES.tabletMini} {
//       padding: 2rem;
//     }

//     @media ${QUERIES.tablet} {
//       margin: 0;
//     }
//   }
