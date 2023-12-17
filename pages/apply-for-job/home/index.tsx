import React, { useState, useEffect } from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import FindJobHomeTemplate from 'components/find-job/FindJobHome/FindJobHome'
import { GetJobBySeekerRequest } from 'api-requests/job'

//Types

import { SingleJobTypes } from 'types/jobTypes'

type Props = {}

const ApplyJobHome = (props: Props) => {
  const [jobsData, setJobsData] = useState<SingleJobTypes[] | null>(null)

  //SingleJobTypes[]

  useEffect(() => {
    let isMounted = true

    const token = localStorage.getItem('userToken')

    if (token) {
      GetJobBySeekerRequest(token)
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
    <FindJobLayout>
      {jobsData !== null ? (
        <FindJobHomeTemplate jobData={jobsData} />
      ) : (
        <p>Loading...</p>
      )}
    </FindJobLayout>
  )
}

export default ApplyJobHome
