import React from 'react'
import PostJobsLayout from 'components/post-jobs/PostJobsLayout/PostJobsLayout'
import PostJobsHomeTemplate from 'components/post-jobs/PostJobsHome/PostJobsHome'

type Props = {}

const PostJobHomePage = (props: Props) => {
  return (
    <PostJobsLayout>
      <PostJobsHomeTemplate />
    </PostJobsLayout>
  )
}

export default PostJobHomePage
