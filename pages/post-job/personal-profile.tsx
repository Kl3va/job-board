import React, { useEffect } from 'react'
import { useAuth } from 'hooks/useAuthProvider'
import { useRouter } from 'next/router'
import JobPostPersonalProfileTemplate from 'components/post-jobs/JobPostPersonalProfile/Children/JobPostPersonalProfileTemplate'

type Props = {}

const CompanyProfileCreate = (props: Props) => {
  const { userType } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (userType !== 'employer') {
      router.push('/login') // Redirect to login page if userType is not jobSeeker
    }
  }, [userType, router])

  // Render PersonalProfileTemplate if userType is jobSeeker
  return userType === 'employer' && <JobPostPersonalProfileTemplate />
}

export default CompanyProfileCreate
