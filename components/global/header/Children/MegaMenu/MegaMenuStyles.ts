import styled, { css } from 'styled-components';

interface MegaMenuStyleTypes {
  OneColumn?: boolean;
  TwoColumns?: boolean;
  ThreeColumns?: boolean;
  menuToggle?: boolean;
  mobileMenuToggle?: boolean;
}

export const MegaContainer = styled.div<MegaMenuStyleTypes>`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-45%, 0%);
  margin-top: 1.1rem;
  margin-right: -1rem;
  padding-top: 2rem;
  display: none;

  ${({ menuToggle }) =>
    menuToggle &&
    css`
      display: block;
    `}

  @media screen and (max-width: 988px) {
    position: relative;
    top: auto;
    left: auto;
    padding: 0rem;
    transform: translate(0%, 0%);
    margin-left: -1rem;
    margin-bottom: -1rem;
    display: none;

    ${({ mobileMenuToggle }) =>
      mobileMenuToggle &&
      css`
        display: block;
      `}
  }
`;

export const MegaWrap = styled.div<MegaMenuStyleTypes>`
  background-color: var(--color-bg-400);
  padding: 1rem;
  box-shadow: var(--box-shadow-100);

  @media screen and (max-width: 988px) {
    box-shadow: none;
    padding: 0rem 0rem;
  }
`;

export const MegaInner = styled.ul<MegaMenuStyleTypes>`
  ${({ OneColumn }) =>
    OneColumn &&
    css`
      display: grid;
      grid-template-columns: 1fr;

      @media screen and (max-width: 988px) {
        grid-template-columns: 1fr;
      }
    `}

  ${({ TwoColumns }) =>
    TwoColumns &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 988px) {
        grid-template-columns: 1fr;
      }
    `}

  ${({ ThreeColumns }) =>
    ThreeColumns &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @media screen and (max-width: 988px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const MegaItem = styled.li`
  width: 330px;
  min-height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  transition: var(--transition);

  & > * {
    flex: 1;
  }

  &:hover {
    transition: var(--transition);
    background-color: var(--color-bg-200);

    i {
      transition: var(--transition);
      color: var(--color-accent-100);
      transform: translateX(0rem);
    }
  }

  @media screen and (max-width: 988px) {
    border-radius: 0px;
    width: 100%;

    &:hover {
      transition: var(--transition);
      background-color: var(--color-bg-200);

      i {
        transition: var(--transition);
        color: var(--color-accent-100);
        transform: translateX(0rem);
      }
    }
  }
`;

export const MegaItemImage = styled.div`
  margin-right: 10px;

  div {
    background-color: var(--color-dec-100);
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: grid;
    place-items: center;
    box-shadow: var(--box-shadow-100);

    svg {
      color: var(--color-accent-100);
    }

    i {
      color: var(--color-accent-100);
      font-size: 1rem;
    }
  }
`;

export const MegaItemContent = styled.div`
  flex: 10;

  h6 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.85rem;
    line-height: 1rem;
    margin-top: 0.4rem;
  }

  @media screen and (max-width: 988px) {
    width: 2rem;
    flex: 20;
  }
`;

export const MegaItemArrow = styled.div`
  margin-left: 10px;
  color: transparent;
  transition: var(--transition);

  i {
    transform: translateX(-1rem);
  }

  @media screen and (max-width: 988px) {
    display: none;
  }
`;
