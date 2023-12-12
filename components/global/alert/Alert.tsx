import React, { useEffect } from 'react'
import { QUERIES } from 'styles/mediaQueries'
import styled, { css } from 'styled-components'
import { useAuth } from 'hooks/useAuthProvider'

const AlertComponent = styled.aside<{ show: boolean }>`
  position: fixed;
  width: min(100%, 25rem);
  padding: 0.5rem 1rem;
  background: #ffffff;
  right: 0;
  top: 0;
  z-index: 5000;
  transition: all ease-in 0.2s;
  transform: translate(100%);

  border-radius: 0.75rem;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${QUERIES.mobile} {
    padding: 1rem 1.5rem;
  }

  p {
    color: var(--color-font-200);
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
    border-radius: 50%;

    @media ${QUERIES.mobile} {
      width: 3rem;
    }
  }

  i {
    background-color: #ffffff;
    background-image: #ffffff;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  ${({ show }) =>
    show &&
    css`
      transform: translate(0);
    `}
`
const FailureIcon = styled.span`
  border: 8px solid #ffcccb;
  background: #ff0000;
`
const SuccessIcon = styled.span`
  border: 8px solid #d1fadf;
  background: #039855;
`

const Alert = () => {
  const { alert, showAlert } = useAuth()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (alert.show) {
      timeout = setTimeout(() => {
        showAlert(false, alert.msg, alert.type)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [alert.show, showAlert])

  return (
    <AlertComponent show={alert.show}>
      {alert.type === 'success' ? (
        <SuccessIcon>
          <i className='fa-solid fa-check'></i>
        </SuccessIcon>
      ) : (
        <FailureIcon>
          <i className='fa-solid fa-xmark'></i>
        </FailureIcon>
      )}

      <p>{alert.msg}</p>
    </AlertComponent>
  )
}

export default Alert
