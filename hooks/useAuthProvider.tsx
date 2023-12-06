import React, { createContext, useContext, useState, useEffect } from 'react'

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
  resetToken: (value: string) => void
  activePopup: string | null
  handleActivePopup: (value: string | null) => void
  handleSetUserType: (value: 'employer' | 'jobseeker') => void
  user: User | null
  userType: 'jobseeker' | 'employer' | null
  token: string | null
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
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [userType, setUserType] = useState<'jobseeker' | 'employer' | null>(
    null
  )

  const handleCardClick = (): void => {
    setIsClicked(!isClicked)
  }

  const handleActivePopup = (value: string | null): void => {
    setActivePopup(value)
  }

  const resetToken = (value: string): void => {
    setToken(value)
  }

  const handleSetUserType = (value: 'jobseeker' | 'employer'): void => {
    setUserType(value)
  }

  useEffect(() => {
    // Check if the user token exists in local storage
    const storedToken = localStorage.getItem('userToken')

    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isClicked,
        handleCardClick,
        resetToken,
        handleSetUserType,
        userType,
        user,
        token,
        activePopup,
        handleActivePopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
