import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const MainPersonalProfile = styled.main`
  max-width: 100%;

  @media ${QUERIES.tablet} {
    display: grid;
    grid-template-columns: 35.8rem 1fr;
  }
`

export const StepSection = styled.section`
  background: var(--color-bg-300);
`

export const PersonalProfileFormSection = styled.section`
  max-width: 100%;
`

export const PersonalProfileFormContainer = styled.div`
  display: grid;
  margin-top: 3rem;

  justify-items: center;
  align-content: center;

  @media ${QUERIES.tablet} {
    min-height: 100vh;
  }
`

export const StepperWrapper = styled.div`
  padding-top: 5rem;
  display: grid;
  gap: 2rem;

  h1,
  h2 {
    line-height: 1; /* 150% */
    text-transform: lowercase;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  h1 {
    margin: 0 0 2.5rem 2.5rem;
    color: var(--color-font-200);
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const StepIndicator = styled.div<{
  index: number
  currentStep: number
}>`
  display: grid;
  width: 3.125rem;
  height: 3.125rem;
  place-items: center;
  border-radius: 50%;
  color: ${(props) =>
    props.index < props.currentStep
      ? 'var(--color-bg-100)'
      : 'var(--color-font-100)'};

  background: ${(props) =>
    props.index < props.currentStep
      ? 'var(--color-accent-100)'
      : 'var(--color-accent-200)'};
`

export const StepsWrapper = styled.div`
  margin-bottom: 1rem;
  padding-left: 2.5rem;
`

export const SteppersContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    color: #000;
    font-size: 1.25rem;
    font-weight: 600;
    max-width: 25ch;
    line-height: 1.875rem; /* 150% */
  }
`

export const PersonalProfileBg = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: block;
  }
`
export const PersonalProgressContainer = styled.div`
  
    display: none;

    @media ${QUERIES.mobile} {
      display: block;
    }
  }
`

export const PersonalProfileLine = styled.div`
  margin-left: 1.5rem;
  width: 0.0625rem;
  height: 3.125rem;
  background: var(--color-border-100);
`
