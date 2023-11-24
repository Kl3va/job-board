import React from 'react'
import ApplyNowTemplate from 'components/find-job/ApplyNow/ApplyNowTemplate'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'

type Props = {}

const ApplyNowPage = (props: Props) => {
  return (
    <FindJobLayout>
      <ApplyNowTemplate />
    </FindJobLayout>
  )
}

export default ApplyNowPage
