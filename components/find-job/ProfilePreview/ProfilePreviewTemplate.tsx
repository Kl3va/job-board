import React from 'react'
import JobHubProfile from 'components/find-job/JobHubProfile/JobHubProfile'
import { applyNowContentData } from 'data/find-job/applyNowContentData'

type Props = {}

const ProfilePreviewTemplate = (props: Props) => {
  return (
    <main>
      <JobHubProfile {...applyNowContentData} />
    </main>
  )
}

export default ProfilePreviewTemplate
