import React from 'react'
import AllJobs from '../AllJobs/AllJobs'
import FilteringBtns from '../FilteringBtns/FilteringBtns'
import { SingleJobTypes } from 'types/jobTypes'

//Styled-components
import { FindJobHomeMain } from './FindJobHomeStyles'

//TYPES
import { JobDataTypes } from 'types/jobTypes'
import JobseekerMenu from '../FindJobHeader/JobseekerMenu'

interface FindJobHomeProps {
  jobData: SingleJobTypes[]
}

const FindJobHomeTemplate = ({ jobData }: FindJobHomeProps) => {
  return (
    <FindJobHomeMain>
      {/* <JobseekerMenu /> */}
      <FilteringBtns />
      <section>
        <AllJobs jobData={jobData} />
      </section>
    </FindJobHomeMain>
  )
}

export default FindJobHomeTemplate
