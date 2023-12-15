import React, { useState, useEffect } from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import AppliedJobsTemplate from 'components/find-job/AppliedJobs/AppliedJobsTemplate'
import { AllAppliedJobsRequest } from 'api-requests/job'
import { JobApplicationTypes } from 'types/jobTypes'

type Props = {}

const AppliedJobsPage = (props: Props) => {
  const [jobsData, setJobsData] = useState<JobApplicationTypes[] | null>(null)

  //SingleJobTypes[]

  useEffect(() => {
    const token = localStorage.getItem('userToken')

    if (token) {
      AllAppliedJobsRequest(token)
        .then((data) => {
          const newData = data.filter((job) => job.jobId !== null)
          setJobsData(newData)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }, [])

 // console.log(jobsData)

  return (
    <FindJobLayout>
      {jobsData !== null ? (
        <AppliedJobsTemplate jobData={jobsData} />
      ) : (
        <p>Loading...</p>
      )}
    </FindJobLayout>
  )
}

export default AppliedJobsPage
