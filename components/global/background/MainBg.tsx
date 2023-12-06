import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'hooks/useAuthProvider'

export const BackgroundBlur = styled.aside`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: block;
`

type Props = {}

const MainBg = (props: Props) => {
  const { handleActivePopup } = useAuth()

  return (
    <BackgroundBlur onClick={() => handleActivePopup(null)}></BackgroundBlur>
  )
}

export default MainBg
