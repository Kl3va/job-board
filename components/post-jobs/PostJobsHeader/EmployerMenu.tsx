import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'hooks/useAuthProvider'

const EmployerMenuBar = styled.aside`
  position: fixed;
  top: 4.5rem;
  right: 10vw;
  cursor: pointer;

  width: min(100%, 15rem);
  padding: 1rem;
  //height: 2.5rem;

  background: #ffffff;
  z-index: 3000;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  font-size: 0.875rem;
  color: var(--color-font-200);

  button {
    height: 100%;
    width: 100%;
    background: inherit;
    border: none;
    cursor: pointer;

    display: flex;
    gap: 1rem;
    justify-items: start;
    align-items: center;
  }
`

const EmployerMenu = () => {
  const { activePopup, handleActivePopup, handleLogout } = useAuth()

  return (
    activePopup === 'employer-menu' && (
      <EmployerMenuBar onClick={() => handleActivePopup(null)}>
        <button type='button' onClick={handleLogout}>
          <i className='fa-solid fa-arrow-right-from-bracket'></i>
          Log out
        </button>
      </EmployerMenuBar>
    )
  )
}

export default EmployerMenu
