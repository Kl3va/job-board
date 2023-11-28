import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

export const AccountSettingsSection = styled.section`
  width: 100%;
`

export const AccountSettingsContainer = styled.div`
  padding: 2rem 1rem;
  margin-top: 2.5rem;
  margin-inline: auto;
  width: min(90%, 58.69rem);

  display: grid;
  gap: 2rem;
  border-radius: 0.5rem;
  background: var(--color-bg-500);

  @media ${QUERIES.tablet} {
    padding: 2rem 5.25rem;
  }
`

export const AccountSettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    border-radius: 0.5rem;
    padding: 0.625rem 1rem;
    border: 1px solid var(--color-bg-300);
    background: var(--color-bg-300);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    font-size: 0.875rem;
  }
`
export const AccountSettingsTabsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;
`

export const AccountSettingsTab = styled.span<{ isActive: boolean }>`
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  padding-block: 0.5rem;

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--color-accent-100);
      border-bottom: 2px solid var(--color-accent-100);
    `}
`
