import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useScrollPosition from 'hooks/useScrollPosition';

interface ScrollTopTypes {
  showButton?: boolean;
}

const ScrollWrap = styled.div<ScrollTopTypes>`
  background-color: var(--color-bg-200);
  position: fixed;
  bottom: 0;
  right: 0;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 100%;
  margin: 1rem;
  display: grid;
  place-items: center;
  transition: var(--transition);
  cursor: pointer;
  display: grid;
  opacity: 0;
  transform: translateY(100px);

  i {
    color: var(--color-font-100);
    font-size: 1.5rem;
  }

  &:hover {
    transition: var(--transition);
    transform: translateY(-1rem);
  }

  ${({ showButton }) =>
    showButton &&
    css`
      display: grid;
      transform: translateY(0px);
      opacity: 1;
    `}
`;

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollTo = () => {
    document?.getElementById('__next')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollPosition } = useScrollPosition();

  useEffect(() => {
    if (scrollPosition.yAxis >= 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollPosition]);

  return (
    <ScrollWrap onClick={handleScrollTo} showButton={showButton}>
      <i className='fa-solid fa-chevron-up'></i>
    </ScrollWrap>
  );
};

export default ScrollTop;
