import React from 'react'
import Image from 'next/image'
import { jobDetailData } from 'data/find-job/jobDetailData'
import { SingleJobTypes } from 'types/jobTypes'

//helper
import { formatDate } from 'helper'

//Default images
import JobLogo from 'public/images/job-logo.png'
import dotIcon from 'public/images/dot.png'

//Styled-component
import {
  FindJobDetailJobRole,
  JobRoleHeader,
  JobRoleSpecifics,
  JobRoleRenumeration,
  JobRoleListContainer,
  JobRoleUnorderedList,
  JobRoleCoreList,
} from './FindJobDetailMainStyles'

// {
//   employerId: string
//   jobRole: string
//   jobSummary: string
//   employmentType: string
//   workType: string
//   pay: number
//   experienceLevel: string
//   responsibilities: string
//   jobRequirements: string[]
//   coreSkills: string[]
//   softSkills: string[]
//   closingDate: string
//   openPositions: number
//   _id: string
//   createdAt: string
//   updatedAt: string
//   __v: number
// }

const FindJobDetailMain = ({
  jobRequirements,
  jobRole,
  jobSummary,
  employmentType,
  coreSkills,
  softSkills,
  closingDate,
  openPositions,
  workType,
  pay,
  experienceLevel,
  responsibilities,
}: SingleJobTypes) => {
  return (
    <FindJobDetailJobRole>
      <JobRoleHeader>
        <div>
          <Image src={JobLogo} alt='job-image' />
        </div>
        <div>
          <h3>{jobRole}</h3>
          <p>{`Fast. United-Kingdom`}</p>
        </div>
      </JobRoleHeader>

      <p>{formatDate(closingDate)}</p>

      <span>
        <i className='fa-regular fa-clock'></i>
        {employmentType}
      </span>

      <JobRoleSpecifics>
        <div>
          <div>
            <Image src={dotIcon} />
          </div>
          <p>{employmentType}</p>
        </div>
        <div>
          <div>
            <Image src={dotIcon} />
          </div>
          <p>{experienceLevel}</p>
        </div>
        <div>
          <div>
            <Image src={dotIcon} />
          </div>
          <p>{workType}</p>
        </div>
      </JobRoleSpecifics>

      <JobRoleRenumeration>
        <h3>Renumeration</h3>
        <p>{pay}</p>
      </JobRoleRenumeration>

      <JobRoleListContainer>
        <h3>Job Summary</h3>
        <p>{jobSummary}</p>
      </JobRoleListContainer>

      <JobRoleListContainer>
        <h3>Job Description/Responsibilities</h3>
        <JobRoleUnorderedList>
          {/* {job_responsibility.description.map((lists, index) => {
            return <li key={index}>{lists}</li>
          })} */}
          <li>{responsibilities}</li>
        </JobRoleUnorderedList>
      </JobRoleListContainer>

      <JobRoleListContainer>
        <h3>Job Requirements</h3>
        <JobRoleUnorderedList>
          {jobRequirements.map((lists, index) => {
            return <li key={index}>{lists}</li>
          })}
        </JobRoleUnorderedList>
      </JobRoleListContainer>

      <JobRoleCoreList>
        <h3>Core Skills</h3>
        <div>
          {coreSkills.map((skills, index) => {
            return <span key={index}>{skills}</span>
          })}
        </div>
      </JobRoleCoreList>

      <JobRoleListContainer>
        <h3>Soft Skills</h3>
        <JobRoleUnorderedList>
          {softSkills.map((lists, index) => {
            return <li key={index}>{lists}</li>
          })}
        </JobRoleUnorderedList>
      </JobRoleListContainer>
    </FindJobDetailJobRole>
  )
}

export default FindJobDetailMain
