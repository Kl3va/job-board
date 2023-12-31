import React from 'react'
import Image from 'next/image'
import { JobDataTypes } from 'types/jobTypes'

//Reusable Styled-components
import { CustomBtn } from 'styles/globalStyles'

//Component-based styled-components
import {
  JobsContainer,
  JobAboutContainer,
  JobAboutSecondary,
  JobHeader,
  JobWrapper,
} from './AllJobsStyles'

interface AllJobHomeTypes {
  jobData: JobDataTypes[]
}

const AllJobs = ({ jobData }: AllJobHomeTypes) => {
  return (
    <JobsContainer>
      {jobData.map((data, id) => {
        return (
          <JobWrapper key={id}>
            <JobHeader>
              <div>
                <Image src={data.job_picture} alt='job-image' />
              </div>
              <div>
                <h3>{data.job_role}</h3>
                <p>{`${data.company}. ${data.location}`}</p>
              </div>
              <div>
                <span>
                  <i className={data.action_save.icon}></i>
                  {data.action_save.label}
                </span>
                <span>
                  <i className={data.action_share.icon}></i>
                  {data.action_share.label}
                </span>
                <span>
                  <i className={data.action_copy.icon}></i>
                  {data.action_copy.label}
                </span>
              </div>
            </JobHeader>
            <p>{data.job_description}</p>
            <JobAboutContainer>
              <span>
                <i className='fa-regular fa-clock'></i>
                {data.job_type}
              </span>
              <span>
                <i className='fa-regular fa-dollar-sign'></i>
                {data.salary_range}
              </span>
            </JobAboutContainer>
            <JobAboutSecondary>
              <div>
                <div>
                  <div>
                    <Image src={data.dot_icon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.job_type}</p>
                </div>
                <div>
                  <div>
                    <Image src={data.dot_icon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.experience_level}</p>
                </div>
                <div>
                  <div>
                    <Image src={data.dot_icon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.job_method}</p>
                </div>
              </div>
              <span>{data.date}</span>
            </JobAboutSecondary>
            <CustomBtn type='submit'>View post</CustomBtn>
          </JobWrapper>
        )
      })}
    </JobsContainer>
  )
}

export default AllJobs
