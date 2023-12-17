import React, { useState, useEffect } from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import SavedJobsTemplate from 'components/find-job/SavedJobs/SavedJobsTemplate'
import { JobApplicationTypes } from 'types/jobTypes'
import { AllSavedJobRequest } from 'api-requests/job'

//Data
import { jobsData } from 'data/find-job/jobsData'

type Props = {}

const SavedJobsPage = (props: Props) => {
  const [jobsData, setJobsData] = useState<JobApplicationTypes[] | null>(null)

  //SingleJobTypes[]

  useEffect(() => {
    let isMounted = true

    const token = localStorage.getItem('userToken')

    if (token) {
      AllSavedJobRequest(token)
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
        <SavedJobsTemplate jobData={jobsData} />
      ) : (
        <p>Loading...</p>
      )}
    </FindJobLayout>
  )
}

export default SavedJobsPage
