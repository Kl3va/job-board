import React from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import FindJobHomeTemplate from 'components/find-job/FindJobHome/FindJobHome'

//Data
import { jobsData } from 'data/post-job/jobsData'

type Props = {}

const ApplyJobHome = (props: Props) => {
  return (
    <FindJobLayout>
      <FindJobHomeTemplate jobData={jobsData} />
    </FindJobLayout>
  )
}

export default ApplyJobHome
