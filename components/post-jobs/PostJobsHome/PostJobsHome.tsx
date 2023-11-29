import React from 'react'

//Reusable Styled-components
import { FindJobHomeMain } from 'components/find-job/FindJobHome/FindJobHomeStyles'
import { JobSearchIconWrapper } from 'components/find-job/FindJobHeader/FindJobHeaderStyles'
import { AppliedJobsInput } from 'components/find-job/AppliedJobs/AppliedJobsTemplate'
import { CustomBtn } from 'styles/globalStyles'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'

//Component based styled-component
import {
  JobHomeHeaderContainer,
  JobHomeHeaderBtnWrapper,
  JobHomeNoJobContainer,
} from './PostJobHomeStyles'

type Props = {}

const PostJobsHomeTemplate = (props: Props) => {
  return (
    <FindJobHomeMain>
      <section>
        <JobHomeHeaderContainer>
          <JobSearchIconWrapper>
            <AppliedJobsInput
              type='search'
              name=''
              id=''
              placeholder='Search'
            />
            <i className='fa-solid fa-magnifying-glass'></i>
          </JobSearchIconWrapper>

          <JobHomeHeaderBtnWrapper>
            <CustomBtn
              type='button'
              bgColor='var(--color-bg-100)'
              textColor='var(--color-font-400)'
            >
              Filter
              <i className='fa-regular fa-bars-filter'></i>
            </CustomBtn>

            <CustomLinkBtn
              href='/post-job/home/job-post'
              text='Post a Job'
              icon='fa-solid fa-plus'
              bgColor='var(--color-accent-100)'
              textColor='var(--color-bg-100)'
            />
          </JobHomeHeaderBtnWrapper>
        </JobHomeHeaderContainer>
      </section>
      <section>
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
      </section>
    </FindJobHomeMain>
  )
}

export default PostJobsHomeTemplate
