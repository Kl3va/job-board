import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { JobApplicationTypes } from 'types/jobTypes'

//Reusable Styled-components
import { CustomBtn } from 'styles/globalStyles'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'
import { StyledBookmark } from '../SavedJobs/SavedJobsLists'
import { formatDate } from 'helper'

//Default images
import JobLogo from 'public/images/job-logo.png'
import dotIcon from 'public/images/dot.png'

//Component-based styled-components
import {
  JobsContainer,
  JobAboutContainer,
  JobAboutSecondary,
  JobHeader,
  JobWrapper,
} from '../AllJobs/AllJobsStyles'

interface AllJobHomeTypes {
  jobData: JobApplicationTypes[]
}

const AppliedJobsLists = ({ jobData }: AllJobHomeTypes) => {
  // const [updatedJobsData, setUpdatedJobsData] = useState<any[]>(jobData)

  // useEffect(() => {
  //   // Update the component state when jobsData prop changes
  //   setUpdatedJobsData(jobData)
  // }, [jobData])

  return (
    <JobsContainer>
      {jobData.map((data, id) => {
        return (
          <JobWrapper key={id}>
            <JobHeader>
              <div>
                <Image src={JobLogo} alt='job-image' />
              </div>
              <div>
                <h3>{data.jobId.jobRole}</h3>
                <p>{`Wiki. United-Kingdom`}</p>
              </div>
              <div>
                <StyledBookmark>
                  <i className='fa-solid fa-circle-check'></i>
                </StyledBookmark>
              </div>
            </JobHeader>
            <p>{data.jobId.jobSummary}</p>
            <JobAboutContainer>
              <span>
                <i className='fa-regular fa-clock'></i>
                {data.jobId.employmentType}
              </span>
              <span>
                <i className='fa-regular fa-dollar-sign'></i>
                {data.jobId.pay}
              </span>
            </JobAboutContainer>
            <JobAboutSecondary>
              <div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                  </div>
                  <p>{data.jobId.employmentType}</p>
                </div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                  </div>
                  <p>{data.jobId.experienceLevel}</p>
                </div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                  </div>
                  <p>{data.jobId.workType}</p>
                </div>
              </div>
              {data.jobId.closingDate && (
                <span>{formatDate(data.jobId.closingDate)}</span>
              )}
            </JobAboutSecondary>
            {/* <CustomBtn type='submit'>View post</CustomBtn> */}
            <CustomLinkBtn
              href={`/apply-for-job/home/${data.jobId._id}`}
              text='View Post'
              bgColor='var(--color-accent-100)'
              textColor='var(--color-bg-100)'
            />
          </JobWrapper>
        )
      })}
    </JobsContainer>
  )
}

export default AppliedJobsLists
