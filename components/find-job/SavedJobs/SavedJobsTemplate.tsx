import React from 'react'
import AllJobs from '../AllJobs/AllJobs'
import FilteringBtns from '../FilteringBtns/FilteringBtns'
import { JobApplicationTypes } from 'types/jobTypes'

//Styled-components
import { FindJobHomeMain } from '../FindJobHome/FindJobHomeStyles'

//TYPES
import { JobDataTypes } from 'types/jobTypes'
import SavedJobsLists from './SavedJobsLists'

interface FindJobHomeProps {
  jobData: JobApplicationTypes[]
}

const SavedJobsTemplate = ({ jobData }: FindJobHomeProps) => {
  return (
    <FindJobHomeMain>
      <FilteringBtns />
      <section>
        {/* <AllJobs jobData={jobData} /> */}
        <SavedJobsLists jobData={jobData} />
      </section>
    </FindJobHomeMain>
  )
}

export default SavedJobsTemplate
