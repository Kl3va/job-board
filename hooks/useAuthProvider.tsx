import React, { createContext, useContext, useState } from 'react'

//Employer Interface
interface Employer {
  token: string
  employer: {
    companyName: string
    accountUserId: string
    companyRepresentative: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
  }
}

//Job Seeker
interface JobSeeker {
  token: string
  jobSeeker: {
    accountUserId: string
    fullName: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
  }
}

type User = Employer | JobSeeker

export interface AuthContextType {
  isClicked: boolean
  handleCardClick: () => void
  user: User | null
  token: string | null
  setUser: React.Dispatch<React.SetStateAction<User | null>> // Define setUser
  setToken: React.Dispatch<React.SetStateAction<string | null>> // Define setToken
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useContext must be used within a CardStateProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const handleCardClick = (): void => {
    setIsClicked(!isClicked)
  }

  return (
    <AuthContext.Provider
      value={{ isClicked, handleCardClick, user, token, setToken, setUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
