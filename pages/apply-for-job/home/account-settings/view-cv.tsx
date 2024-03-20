import React from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import ViewCVTemplate from 'components/find-job/ViewCV/ViewCVTemplate'

type Props = {}

const ViewCV = (props: Props) => {
  return (
    <FindJobLayout>
      <ViewCVTemplate />
    </FindJobLayout>
  )
}

export default ViewCV
