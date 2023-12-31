import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PersonalProfileTemplate from 'components/find-job/PersonalProfile/PersonalProfileTemplate'

import { useAuth } from 'hooks/useAuthProvider'

type Props = {}

const PersonalProfile = (props: Props) => {
  const { userType } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (userType !== 'jobseeker') {
      router.push('/login') // Redirect to login page if userType is not jobSeeker
    }
  }, [userType, router])

  // Render PersonalProfileTemplate if userType is jobSeeker
  return userType === 'jobseeker' && <PersonalProfileTemplate />
  // return <PersonalProfileTemplate />
}

export default PersonalProfile
