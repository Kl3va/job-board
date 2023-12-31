import React from 'react'
import AllJobs from '../AllJobs/AllJobs'
import FilteringBtns from '../FilteringBtns/FilteringBtns'

//Styled-components
import {
  FindJobHomeMain,
} from './FindJobHomeStyles'

//TYPES
import { JobDataTypes } from 'types/jobTypes'

interface FindJobHomeProps {
  jobData: JobDataTypes[]
}

const FindJobHomeTemplate = ({ jobData }: FindJobHomeProps) => {
  return (
    <FindJobHomeMain>
      <FilteringBtns />
      <section>
        <AllJobs jobData={jobData} />
      </section>
    </FindJobHomeMain>
  )
}

export default FindJobHomeTemplate
