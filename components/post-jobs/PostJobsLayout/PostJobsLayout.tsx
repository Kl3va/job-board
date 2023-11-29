import React from 'react'
import { ReactNode } from 'react'
//import FindJobHeader from '../FindJobHeader/FindJobHeader'
import PostJobHeader from '../PostJobsHeader/PostJobsHeader'
import { postJobNavData } from 'data/post-job/postJobHeaderData'

interface FindJobLayoutProps {
  children: ReactNode
}

const PostJobsLayout = ({ children }: FindJobLayoutProps) => {
  return (
    <>
      <PostJobHeader {...postJobNavData} />
      {children}
    </>
  )
}

export default PostJobsLayout
