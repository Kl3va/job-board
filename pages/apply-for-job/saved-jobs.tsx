import React from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import SavedJobsTemplate from 'components/find-job/SavedJobs/SavedJobsTemplate'

//Data
import { jobsData } from 'data/find-job/jobsData'

type Props = {}

const SavedJobsPage = (props: Props) => {
  return (
    <FindJobLayout>
      <SavedJobsTemplate jobData={jobsData} />
    </FindJobLayout>
  )
}

export default SavedJobsPage
