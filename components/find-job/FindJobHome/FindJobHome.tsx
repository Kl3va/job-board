import React, { useState } from 'react'
import AllJobs from '../AllJobs/AllJobs'
import FilteringBtns from '../FilteringBtns/FilteringBtns'
import { SingleJobTypes } from 'types/jobTypes'
import { useAuth } from 'hooks/useAuthProvider'

//Styled-components
import { FindJobHomeMain } from './FindJobHomeStyles'

//TYPES
import { JobDataTypes } from 'types/jobTypes'
import JobseekerMenu from '../FindJobHeader/JobseekerMenu'

interface FindJobHomeProps {
  jobData: SingleJobTypes[]
}

const FindJobHomeTemplate = ({ jobData }: FindJobHomeProps) => {
  const { filters, handleFilterChange } = useAuth()
  const [filteredData, setFilteredData] = useState<SingleJobTypes[]>(jobData)

  const filterJobs = () => {
    if (
      Object.values(filters).every((filter) => filter.length === 0) ||
      !filters // If no filters or all filters are empty, show all jobs (initial data)
    ) {
      setFilteredData(jobData)
    } else {
      const filteredJobs = jobData.filter((job) => {
        // Apply your filtering logic based on the filters object
        const jobPay = Number(job.pay)
        // Example filtering logic (modify as needed)
        const passesWorkTypeFilter =
          filters.workType.length === 0 ||
          filters.workType.includes(job.workType)
        const passesEmploymentTypeFilter =
          filters.employmentType.length === 0 ||
          filters.employmentType.includes(job.employmentType)
        const passesExperienceLevelFilter =
          filters.experienceLevel.length === 0 ||
          filters.experienceLevel.includes(job.experienceLevel)
        const passesPayFilter =
          filters.pay.length === 0 ||
          filters.pay.some((filter) => {
            const filterValue = Number(filter)
            if (filterValue === 10000) {
              return jobPay >= filterValue // Above $10000
            } else {
              return jobPay <= filterValue // Below or equal to the selected pay range
            }
          })

        return (
          passesWorkTypeFilter &&
          passesEmploymentTypeFilter &&
          passesExperienceLevelFilter &&
          passesPayFilter
        )
      })
      setFilteredData(filteredJobs)
    }
  }

  //console.log(filteredData)

  return (
    <FindJobHomeMain>
      <FilteringBtns filterJobs={filterJobs} />
      <section>
        <AllJobs jobData={filteredData} />
      </section>
    </FindJobHomeMain>
  )
}

export default FindJobHomeTemplate
