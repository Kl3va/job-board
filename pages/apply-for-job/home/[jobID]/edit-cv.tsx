import React from 'react'
import EditCvTemplate from 'components/find-job/EditCv/EditCvTemplate'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'

type Props = {}

const EditCvPage = (props: Props) => {
  return (
    <FindJobLayout>
      <EditCvTemplate />
    </FindJobLayout>
  )
}

export default EditCvPage
