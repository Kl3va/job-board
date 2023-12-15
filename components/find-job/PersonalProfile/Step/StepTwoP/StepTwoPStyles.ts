import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const ImageUploadWrapper = styled.div`
  padding: 1rem 0.25rem;

  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-accent-200);
  // background: var(--White, #fff);
`
export const PdfWrapper = styled.div`
  // height: 4.5rem;
  padding: 0.7rem 1rem;
  border: 1px solid var(--color-accent-100);
  border-radius: 0.5rem;

  display: flex;
  gap: 1rem;

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1;
  }

  & > :first-child {
    display: grid;
    width: 2rem;
    height: 2rem;
    place-items: center;
    border-radius: 1.75rem;
    border: 4px solid var(--color-bg-200);
    background: var(--color-bg-300);
  }

  & > :last-child {
    margin-left: auto;
    cursor: pointer;
  }
`

export const UploaderContent = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;
  cursor: pointer;

  & > span {
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: var(--color-accent-200);

    display: grid;
    place-items: center;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    max-width: 30ch;
    text-align: center;

    span {
      color: var(--color-accent-100);
    }
  }
`

export const UploaderBtnWrapper = styled.div`
  display: flex;
  gap: 2.5rem;

  & > * {
    flex: 1;
  }
`
