import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'hooks/useAuthProvider'

const SignUpButton = styled.button`
  display: flex;
  padding: 0.5rem 1.75rem;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  cursor: pointer;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  border: none;
  background-color: var(--color-accent-100);
  color: var(--color-bg-100);

  &:hover {
    opacity: 0.8;
  }
`

const SignUpBtn = () => {

 const { handleActivePopup } = useAuth()

  return <SignUpButton type='button' onClick={() => handleActivePopup('route-popup')}>Sign Up</SignUpButton>
}

export default SignUpBtn
