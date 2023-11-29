import React from 'react'
import Image from 'next/image'
import { jobDetailData } from 'data/find-job/jobDetailData'

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

type Props = typeof jobDetailData

const FindJobDetailMain = ({
  job_method,
  job_picture,
  job_requirements,
  job_responsibility,
  job_role,
  job_summary,
  job_type,
  dot_icon,
  company,
  location,
  date,
  core_skills,
  soft_skills,
  renumeration,
  experience_level,
}: Props) => {
  return (
    <FindJobDetailJobRole>
      <JobRoleHeader>
        <div>
          <Image src={job_picture} alt='job-image' />
        </div>
        <div>
          <h3>{job_role}</h3>
          <p>{`${company}. ${location}`}</p>
        </div>
      </JobRoleHeader>

      <p>{date}</p>

      <span>
        <i className='fa-regular fa-clock'></i>
        {job_type}
      </span>

      <JobRoleSpecifics>
        <div>
          <div>
            <Image src={dot_icon} />
          </div>
          <p>{job_type}</p>
        </div>
        <div>
          <div>
            <Image src={dot_icon} />
          </div>
          <p>{experience_level}</p>
        </div>
        <div>
          <div>
            <Image src={dot_icon} />
          </div>
          <p>{job_method}</p>
        </div>
      </JobRoleSpecifics>

      <JobRoleRenumeration>
        <h3>{renumeration.title}</h3>
        <p>{renumeration.amount}</p>
      </JobRoleRenumeration>

      <JobRoleListContainer>
        <h3>{job_summary.title}</h3>
        <p>{job_summary.description}</p>
      </JobRoleListContainer>

      <JobRoleListContainer>
        <h3>{job_responsibility.title}</h3>
        <JobRoleUnorderedList>
          {job_responsibility.description.map((lists, index) => {
            return <li key={index}>{lists}</li>
          })}
        </JobRoleUnorderedList>
      </JobRoleListContainer>

      <JobRoleListContainer>
        <h3>{job_requirements.title}</h3>
        <JobRoleUnorderedList>
          {job_requirements.description.map((lists, index) => {
            return <li key={index}>{lists}</li>
          })}
        </JobRoleUnorderedList>
      </JobRoleListContainer>

      <JobRoleCoreList>
        <h3>{core_skills.title}</h3>
        <div>
          {core_skills.skill_sets.map((skills, index) => {
            return <span key={index}>{skills}</span>
          })}
        </div>
      </JobRoleCoreList>

      <JobRoleListContainer>
        <h3>{soft_skills.title}</h3>
        <JobRoleUnorderedList>
          {soft_skills.skill_sets.map((lists, index) => {
            return <li key={index}>{lists}</li>
          })}
        </JobRoleUnorderedList>
      </JobRoleListContainer>
    </FindJobDetailJobRole>
  )
}

export default FindJobDetailMain
