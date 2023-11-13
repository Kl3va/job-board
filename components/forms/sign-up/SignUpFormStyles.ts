import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const SignUpContainer = styled.div`
  width: min(90%, 22.63rem);
  margin-inline: auto;
  margin-top: 4rem;

  display: grid;
  gap: 1.68rem;

  h1 {
    font-size: 1.26rem;
    text-align: center;
    font-weigth: 600;
    text-transform: lowercase;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  label {
    font-size: 0.875rem;
    color: var(--color-font-400);
    font-weight: 500;
  }

  button {
    width: 100%;
    margin-top: 1.68rem;
  }

  form {
    display: grid;
    gap: 0.84rem;
  }

  p {
    line-height: 1;
    font-size: 0.8rem;
    color: red;
  }

  span {
    font-size: 0.87825rem;

    a {
      color: var(--color-accent-100);
    }
  }

  @media ${QUERIES.tablet} {
    margin-top: 9.8rem;
  }
`

export const HeaderWrapper = styled.div`
  display: grid;
  justify-content: center;

  span {
    width: 3.12rem;
    justify-self: center;
  }
`

export const InputWrapper = styled.div`
  display: grid;
  gap: 0.3rem;
`

export const InputType = styled.input<{ isTouched: boolean; isUser: boolean }>`
  padding: 0.53rem 0.74rem;
  border-radius: 0.42rem;
  border: 0.84px solid var(--color-accent-200);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  &:focus {
    border: 1px solid var(--color-accent-100);
    outline: none;

    &:invalid {
      border: 1px solid red;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px red;

      & + p {
        display: block;
      }
    }
  }

  ${(props) =>
    props.isTouched &&
    props.isUser &&
    css`
      border: 1px solid red;
    `}
`
