import React from 'react'
import PostJobsLayout from 'components/post-jobs/PostJobsLayout/PostJobsLayout'
import JobPostFormTemplate from 'components/post-jobs/JobPostForm/JobPostFormTemplate'

type Props = {}

const JobPostsPage = (props: Props) => {
  return (
    <PostJobsLayout>
      <JobPostFormTemplate />
    </PostJobsLayout>
  )
}

export default JobPostsPage
