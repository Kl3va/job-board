import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface HeaderStylesTypes {
  lastMenu?: boolean
  mobileNavToggle?: boolean
  mobileMenuToggle?: boolean
  isActive?: boolean
  isDemoConnected?: boolean
  specialTitle?: string
}

export const HeaderContainer = styled.header`
  max-width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-bottom: 1px solid var(--color-border-100);
  z-index: 1000;

  a {
    font-weight: 500;
  }
`

export const HeaderInner = styled.div`
  min-height: 5rem;
  width: min(90%, var(--max-container));
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogoContainer = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-pry-100);
  cursor: pointer;

  span {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    color: var(--color-font-200);
  }
`

export const HeaderNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  justify-content: space-between;
`

export const MobileNav = styled.div`
  display: none;
  position: relative;
  width: 1.5rem;

  button {
    border: none;
    background-color: transparent;

    i {
      color: var(--color-font-100) !important;
      font-size: 1.5rem;
    }

    &:active,
    &:visited,
    &:hover {
      color: var(--color-font-100) !important;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
  }
`

export const HeaderNavList = styled(motion.ul)<HeaderStylesTypes>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 800px) {
    display: flex;
    background-color: var(--color-bg-100);
    position: absolute;
    margin-top: 5.2rem;
    transform: translateX(20px);
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 300px;
    transform: translateX(1rem) translateY(-1rem);
    height: calc(100vh - 5.2rem);
    padding: 2rem 0rem;
    border-left: 0.2rem solid var(--color-border-100);
    z-index: 1000;
    overflow: hidden;

    & > li,
    a {
      font-size: 1.5rem;
      font-weight: 800;
    }

    div {
      flex-direction: column;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 410px) {
    width: 100vw;
  }
`

export const MenuList = styled.li<HeaderStylesTypes>`
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  justify-content: center;

  &:hover {
    color: var(--color-accent-100);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--color-accent-100);
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      a {
        color: var(--color-accent-100);
      }
    `}

    ${({ isDemoConnected, specialTitle }) =>
    !isDemoConnected &&
    (specialTitle === 'Create' || specialTitle === 'Profile') &&
    css`
      a {
        opacity: 0.5;
        pointer-events: none;
      }
    `}

    .list_container {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
`

export const MainCollection = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
`

export const SubMenu = styled.ul<HeaderStylesTypes>`
  background-color: var(--color-bg-300);
  position: absolute;
  top: 0;
  transform: translateY(3rem);
  display: flex;
  flex-direction: column;
  min-width: 200px;
  border-radius: 0.5rem;
  z-index: 1000;

  a {
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border-bottom: 0.1rem solid var(--color-border-100);
  }

  @media screen and (max-width: 800px) {
    position: inherit;
    transform: translateY(0rem);
    border-radius: 0rem;

    a {
      width: 400px;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
`

export const CreateBtn = styled.li<HeaderStylesTypes>`
  cursor: pointer;
  transition: var(--transition);

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.5;
    `}
`

export const ConnectBtn = styled.button`
  border-radius: 2.5rem;
  background: var(--color-font-100);
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: black;
  height: 3rem;
  border: none;

  p {
    color: black;
    line-height: 0px;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & span:nth-child(2) {
      display: inline-block;
      width: 0.0825rem;
      height: 0.87725rem;
      background: #324344;
    }

    & > :last-child {
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
      background: #2c0ee1;
      border-radius: 50%;
    }
  }
`

export const HeaderNavMenu = styled.li<HeaderStylesTypes>`
  position: relative;
  cursor: pointer;
  margin-right: 3rem;
  min-height: 3.75rem;
  display: grid;
  place-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      a {
        color: var(--color-accent-100);
      }
    `}

  span {
    margin-left: 0.3rem;
    display: inline-flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(75%);
    margin-right: 20px;
    margin-bottom: 50%;
    display: none;

    i {
      font-size: 0.7rem;
      transition: var(--transition);
      transform: rotateZ(0deg);

      ${({ mobileMenuToggle }) =>
        mobileMenuToggle &&
        css`
          transition: var(--transition);
          transform: rotateZ(180deg);
        `}
    }

    @media screen and (max-width: 800px) {
      display: block;
    }
  }

  ${({ lastMenu }) =>
    lastMenu &&
    css`
      margin-right: 0rem;
    `}

  @media screen and (max-width: 800px) {
    margin-right: 0rem;
    border-bottom: none;
    padding: 1rem;
    transition: var(--transition);
    width: 100%;
    display: grid;
    place-items: center;

    a {
      width: 100%;
      text-align: center;
    }

    &:hover {
      transition: var(--transition);
      background-color: var(--color-bg-200);
    }
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 7.5rem;

  @media screen and (max-width: 800px) {
    display: none;
  }

  button {
    background-color: var(--color-dec-100);
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: grid;
    place-items: center;
    cursor: pointer;

    svg {
      height: 20px;
      width: auto;
      color: var(--color-font-100);
      transition: var(--transition);
    }

    &:hover {
      svg {
        color: var(--color-accent-100);
        transition: var(--transition);
      }
    }
  }
`

export const MobileTheme = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    padding: 1rem;
    height: 52.5px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-border-100);

    button {
      background-color: var(--color-dec-100);
      border: none;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      display: grid;
      place-items: center;
      cursor: pointer;

      svg {
        height: 1rem;
        width: auto;
        color: var(--color-font-100);
        transition: var(--transition);
      }

      &:hover {
        svg {
          color: var(--color-accent-100);
          transition: var(--transition);
        }
      }
    }
  }
`

export const LinkWrapper = styled.div`
  display: block;
  margin-left: auto;

  @media screen and (max-width: 800px) {
    margin: 1rem auto;
  }
`

export const HeaderBtnsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-left: auto;
  align-items: center;
`
