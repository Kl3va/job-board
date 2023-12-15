import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { JobApplicationTypes } from 'types/jobTypes'
import { useAuth } from 'hooks/useAuthProvider'
import { UnSavedJobRequest } from 'api-requests/job'

//Reusable Styled-components
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'
import { formatDate } from 'helper'

//Default images
import JobLogo from 'public/images/job-logo.png'
import dotIcon from 'public/images/dot.png'

//styled-component
export const StyledBookmark = styled.span`
  cursor: pointer;

  i {
    background-color: var(--color-accent-100);
    background-image: var(--color-accent-100);
    -webkit-text-fill-color: var(--color-accent-100);
    -webkit-background-clip: text;
  }
`

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

const SavedJobsLists = ({ jobData }: AllJobHomeTypes) => {
  const { token, userType, showAlert } = useAuth()
  const [savedJobsData, setSavedJobsData] =
    useState<JobApplicationTypes[]>(jobData)

  useEffect(() => {
    // Update the component state when jobsData prop changes
    setSavedJobsData(jobData)
  }, [jobData]) // Re-run this effect whenever jobsData changes

  const UnsaveJobWithID = async (id: string) => {
    if (userType === 'jobseeker' && token !== null) {
      try {
        await UnSavedJobRequest(token, id)
        showAlert(true, 'Job Unsaved!', 'success')
        const updatedList = savedJobsData.filter((job) => job.jobId._id !== id)
        setSavedJobsData(updatedList)
      } catch (error: any) {
        //Display alert message
        showAlert(true, error.message, 'failure')
      }
    }
  }

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
                <StyledBookmark
                  onClick={() =>
                    data.jobId._id && UnsaveJobWithID(data.jobId._id)
                  }
                >
                  <i className='fa-solid fa-bookmark'></i>
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
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.jobId.employmentType}</p>
                </div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.jobId.experienceLevel}</p>
                </div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                    {/* <i className='fa-solid fa-period'></i> */}
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

export default SavedJobsLists
