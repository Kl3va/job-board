import styled, { css } from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'

interface UniqueLinkType {
  isActive?: boolean
}

export const FooterContainer = styled.footer`
  max-width: 100%;
  background-color: var(--color-bg-100);
  font-family: var(--font-pry-300);
  font-weight: 400;
  border-top: 0.2rem solid var(--color-border-100);
`

export const FooterInner = styled.div`
  margin: var(--center-container);
  width: min(89.61%, var(--max-container));
  padding-block: 1.65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${QUERIES.mobile} {
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
  }
`
export const FooterCopyright = styled.div`
  color: var(--color-font-100);
  font-size: 1.3rem;
  font-weight: 500;
  font-family: var(--font-pry-100);

  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media ${QUERIES.mobile} {
    margin-bottom: 0;
  }

  a {
    color: var(--color-font-100);
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--font-pry-100);
    max-width: 4.5rem;
    display: block;
    line-height: 1;

    &:hover {
      color: var(--color-font-100);
    }
  }
`
export const FooterNav = styled.nav`
  margin-bottom: 2rem;

  @media ${QUERIES.mobile} {
    margin-bottom: 0;
  }
`
export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media ${QUERIES.mobile} {
    flex-direction: row;
    justify-content: space-between;
    
  }

  a {
    
    letter-spacing: 1px;
    display: block;
    font-family: font-family: var(--font-pry-200);
  }
`
export const FooterUniqueLink = styled.li<UniqueLinkType>`
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid var(--color-accent-100);
      a {
        color: var(--color-accent-100);
      }
    `}
`

export const FooterSocialsContainer = styled.div`
  margin-bottom: 2rem;

  @media ${QUERIES.mobile} {
    margin-bottom: 0;
    margin-left: auto;
  }
`

export const FooterSocials = styled.ul`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  li {
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 0rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
