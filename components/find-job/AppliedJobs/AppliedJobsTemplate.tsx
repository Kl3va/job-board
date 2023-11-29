import React from 'react'
import styled from 'styled-components'
import AllJobs from '../AllJobs/AllJobs'

//Data
import { jobsData } from 'data/find-job/jobsData'

//Reusable Styled-component
import { FindJobHomeMain } from '../FindJobHome/FindJobHomeStyles'
import { JobSearchIconWrapper } from '../FindJobHeader/FindJobHeaderStyles'

export const AppliedJobsInput = styled.input`
  width: min(100%, 20rem);
  padding-inline: 2.5rem 0;
  font-size: 1rem;

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
    padding-left: 1.5rem;
  }
`

type Props = {}

const AppliedJobsTemplate = (props: Props) => {
  return (
    <FindJobHomeMain>
      <section>
        <JobSearchIconWrapper>
          <AppliedJobsInput type='search' name='' id='' placeholder='Search' />
          <i className='fa-solid fa-magnifying-glass'></i>
        </JobSearchIconWrapper>
      </section>

      <section>
        <AllJobs jobData={jobsData} />
      </section>
    </FindJobHomeMain>
  )
}

export default AppliedJobsTemplate
