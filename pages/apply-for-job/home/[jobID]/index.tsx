import React from 'react'
import FindJobDetailTemplate from 'components/find-job/FindJobDetail/FindJobDetailTemplate'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'

type Props = {}

const JobID = (props: Props) => {
  return (
    <FindJobLayout>
      <FindJobDetailTemplate />
    </FindJobLayout>
  )
}

export default JobID
