import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'
import { motion } from 'framer-motion'

export const PersonalInfoSettingsContainer = styled.div`
  padding-inline: 0.5rem;

  // display: grid;
  // gap: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-bg-300);

  @media ${QUERIES.tablet} {
    padding-inline: 2rem;
  }
`

export const PersonalInfoSettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 500;
  }

  span {
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;

    border-radius: 0.5rem;
    border: 1px solid var(--color-accent-200);

    i {
      background-color: var(--color-bg-400);
      background-image: var(--color-bg-400);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }
`

//Form Section
export const PersonalInfoSettingsForm = styled(motion.form)<{
  formToggle?: boolean
}>`
  display: grid;
  gap: 1.25rem;
  overflow: hidden;
  // padding-top: 2rem;

  input,
  select,
  textarea {
    padding: 0.53rem 0.74rem;
    border-radius: 0.42rem;
    border: 0.84px solid var(--color-accent-200);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    background: var(--color-bg-100);
  }

  p {
    font-size: 0.875rem;
    color: var(--color-font-100);
    font-weight: 500;
  }
`
export const PersonalInfoSettingsFormHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media ${QUERIES.tablet} {
    grid-template-columns: auto 1fr;
  }
`

export const PersonalInfoSettingsBtnWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;

  button {
    width: 4rem;
  }
`

export const PersonalInfoSettingsImgWrapper = styled.div`
  width: 2.5rem;

  justify-self: center;

  @media ${QUERIES.tablet} {
    width: 4rem;
    align-self: start;
  }
`

export const PersonalInfoSettingsSelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${QUERIES.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`
