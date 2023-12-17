import React, { useEffect, useState } from 'react'
import { useAuth } from 'hooks/useAuthProvider'
import PostJobsLayout from 'components/post-jobs/PostJobsLayout/PostJobsLayout'
import PostJobsHomeTemplate from 'components/post-jobs/PostJobsHome/PostJobsHome'
import { GetJobByEmployerRequest } from 'api-requests/job'
import { SingleJobTypes } from 'types/jobTypes'

// interface Props {
//   jobsData: SingleJobTypes[]
// }

const PostJobHomePage = () => {
  const [jobsData, setJobsData] = useState<SingleJobTypes[] | null>(null)

  //SingleJobTypes[]

  useEffect(() => {
    let isMounted = true

    const token = localStorage.getItem('userToken')

    if (token) {
      GetJobByEmployerRequest(token)
        .then((data) => {
          setJobsData(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <PostJobsLayout>
      {jobsData !== null ? (
        <PostJobsHomeTemplate jobsData={jobsData} />
      ) : (
        <p>Loading...</p>
      )}
    </PostJobsLayout>
  )
}

export default PostJobHomePage
