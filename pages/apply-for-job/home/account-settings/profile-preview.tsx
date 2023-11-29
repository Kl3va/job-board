import React from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import ProfilePreviewTemplate from 'components/find-job/ProfilePreview/ProfilePreviewTemplate'

type Props = {}

const ProfilePreviewPage = (props: Props) => {
  return (
    <FindJobLayout>
      <ProfilePreviewTemplate />
    </FindJobLayout>
  )
}

export default ProfilePreviewPage
