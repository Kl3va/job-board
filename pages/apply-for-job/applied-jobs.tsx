import React from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import AppliedJobsTemplate from 'components/find-job/AppliedJobs/AppliedJobsTemplate'

type Props = {}

const AppliedJobsPage = (props: Props) => {
  return (
    <FindJobLayout>
      <AppliedJobsTemplate />
    </FindJobLayout>
  )
}

export default AppliedJobsPage
