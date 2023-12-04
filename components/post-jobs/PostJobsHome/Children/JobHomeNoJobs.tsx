import React from 'react'
import { JobHomeNoJobContainer } from '../PostJobHomeStyles'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'

type Props = {}

const JobHomeNoJobs = (props: Props) => {
  return (
    <JobHomeNoJobContainer>
      <span>
        <i className='fa-solid fa-magnifying-glass'></i>
      </span>
      <h3>No job post found</h3>
      <p>You have no posted job yet</p>
      <div>
        <CustomLinkBtn
          href='/post-job/home/job-post'
          text='Post a Job'
          icon='fa-solid fa-plus'
          bgColor='var(--color-accent-100)'
          textColor='var(--color-bg-100)'
        />
      </div>
    </JobHomeNoJobContainer>
  )
}

export default JobHomeNoJobs
