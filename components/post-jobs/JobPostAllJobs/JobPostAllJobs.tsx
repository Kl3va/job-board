import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { JobDataTypes } from 'types/jobTypes'
import { SingleJobTypes } from 'types/jobTypes'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'
import { useAuth } from 'hooks/useAuthProvider'

//api request
import { DeleteJobRequest } from 'api-requests/job'

//Reusable Styled-components
import { CustomBtn } from 'styles/globalStyles'

//Helepr function
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
} from 'components/find-job/AllJobs/AllJobsStyles'

interface Props {
  jobsData: SingleJobTypes[]
}

const EllipsisSpan = styled.div`
  display: grid;
  cursor: pointer;
  width: 2rem;
  aspect-ratio: 1 / 1;
  place-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--color-accent-200);
  background: #ffffff;
`
const PopupDiv = styled.span`
  position: absolute;
  top: 3.2rem;
  right: 0;
  cursor: pointer;

  width: min(90%, 15rem);
  padding: 0.625rem 1rem;
  height: 2.5rem;

  background: #ffffff;
  z-index: 3000;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  font-size: 0.875rem;
  color: var(--color-font-200);
`

const JobPostAllJobs = ({ jobsData }: Props) => {
  // const [activePopup, setActivePopup] = useState<number | null>(null)

  const { activePopup, handleActivePopup, token, userType, showAlert } = useAuth()
  const [updatedJobsData, setUpdatedJobsData] =
    useState<SingleJobTypes[]>(jobsData)

  useEffect(() => {
    // Update the component state when jobsData prop changes
    setUpdatedJobsData(jobsData)
  }, [jobsData]) // Re-run this effect whenever jobsData changes

  const deleteJobID = async (id: string) => {
    if (userType === 'employer' && token !== null) {
      try {
        await DeleteJobRequest(token, id)
        showAlert(true, 'Job Deleted!', 'success')
        const updatedList = updatedJobsData.filter((job) => job._id !== id)
        setUpdatedJobsData(updatedList)
        handleActivePopup(null)
      } catch (error: any) {
        //Display alert message
        showAlert(true, error.message, 'failure')
      }
    }
  }

  return (
    <JobsContainer>
      {updatedJobsData.map((data, index) => {
        return (
          <JobWrapper key={data._id}>
            <JobHeader>
              <div>
                <Image src={JobLogo} alt='job-image' />
              </div>
              <div>
                <h3>{data.jobRole}</h3>
                <p>{`Revolut. United-Kingdom`}</p>
              </div>
              <div>
                <EllipsisSpan onClick={() => handleActivePopup(data._id)}>
                  <i className='fa-regular fa-ellipsis-vertical'></i>
                </EllipsisSpan>
                {activePopup === data._id && (
                  <PopupDiv onClick={() => deleteJobID(data._id)}>
                    Delete
                  </PopupDiv>
                )}
              </div>
            </JobHeader>
            <p>{data.jobSummary}</p>
            <JobAboutContainer>
              <span>
                <i className='fa-regular fa-clock'></i>
                {data.employmentType}
              </span>
              <span>
                <i className='fa-regular fa-dollar-sign'></i>
                {data.pay}
              </span>
            </JobAboutContainer>
            <JobAboutSecondary>
              <div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.employmentType}</p>
                </div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.experienceLevel}</p>
                </div>
                <div>
                  <div>
                    <Image src={dotIcon} />
                    {/* <i className='fa-solid fa-period'></i> */}
                  </div>
                  <p>{data.workType}</p>
                </div>
              </div>
              <span>{formatDate(data.closingDate)}</span>
            </JobAboutSecondary>
            {/* <CustomBtn type='submit'>View post</CustomBtn> */}
            <CustomLinkBtn
              href={`/post-job/home/${data._id}`}
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

export default JobPostAllJobs
