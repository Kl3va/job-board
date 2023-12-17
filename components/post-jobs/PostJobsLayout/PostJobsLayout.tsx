import React, { useEffect } from 'react'
import { ReactNode } from 'react'
//import FindJobHeader from '../FindJobHeader/FindJobHeader'
import PostJobHeader from '../PostJobsHeader/PostJobsHeader'
import { postJobNavData } from 'data/post-job/postJobHeaderData'
import { useAuth } from 'hooks/useAuthProvider'
import { useRouter } from 'next/router'

interface PostJobLayoutProps {
  children: ReactNode
}

const PostJobsLayout = ({ children }: PostJobLayoutProps) => {
  const { user, userType } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || userType !== 'employer') {
      router.push('/login') // Redirect to login page if not authenticated as an employer
    }
  }, [user, userType, router])

  if (!user || userType !== 'employer') {
    return null // This won't render anything; the redirection will handle unauthorized access
  }

  return (
    <>
      <PostJobHeader {...postJobNavData} />
      {children}
    </>
  )
}

export default PostJobsLayout
