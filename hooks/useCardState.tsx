import React, { createContext, useContext, useState } from 'react'

export interface CardState {
  isClicked: boolean
  handleCardClick: () => void
}

const CardStateContext = createContext<CardState | undefined>(undefined)

export const useCardStateContext = (): CardState => {
  const context = useContext(CardStateContext)
  if (context === undefined) {
    throw new Error(
      'useCardStateContext must be used within a CardStateProvider'
    )
  }
  return context
}

interface CardStateProviderProps {
  children: React.ReactNode
}

export const CardStateProvider: React.FC<CardStateProviderProps> = ({
  children,
}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleCardClick = (): void => {
    setIsClicked(!isClicked)
  }

  return (
    <CardStateContext.Provider value={{ isClicked, handleCardClick }}>
      {children}
    </CardStateContext.Provider>
  )
}
