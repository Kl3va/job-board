import React from 'react'
import Image from 'next/image'
import { useAuth } from 'hooks/useAuthProvider'
import { ApplyToJobRequest } from 'api-requests/job'
import { applyNowContentData } from 'data/find-job/applyNowContentData'

//Reusable Styled-components
import { MultiBtnsWrapper } from '../ApplyNow/Children/ApplyNowContentStyles'
import { CustomBtn } from 'styles/globalStyles'
import { JobRoleListContainer } from '../FindJobDetail/Children/FindJobDetailMainStyles'
import { JobRoleUnorderedList } from '../FindJobDetail/Children/FindJobDetailMainStyles'

//Component-based Styled-components
import {
  JobHubProfileSection,
  JobHubProfileContainer,
  JobHubProfileInfo,
  JobRoleSpan,
  JobHubProfileHeader,
  JobHubProfileSummary,
} from './JobHubProfileStyles'

type Props = typeof applyNowContentData

const JobHubApplyProfile = ({ profile }: Props) => {
  const { activeJobId, token, showAlert, user } = useAuth()

  const applyToJob = async () => {
    if (token !== null) {
      try {
        const data = await ApplyToJobRequest(token, activeJobId)
        showAlert(true, 'Job Application Sucessful!', 'success')
      } catch (error: any) {
        showAlert(true, error.message, 'failure')
      }
    }
  }

  return (
    <JobHubProfileSection>
      <JobHubProfileContainer>
        <JobHubProfileInfo>
          <div>
            <Image src={profile.image} alt='profile-image' />
          </div>
          <div>
            {user && 'fullName' in user && <p>{user.fullName}</p>}
            <JobRoleSpan>
              <div>
                <Image src={profile.icon} />
              </div>
              {user && 'currentPosition' in user && (
                <p>{user.currentPosition}</p>
              )}
            </JobRoleSpan>
          </div>
        </JobHubProfileInfo>

        <JobHubProfileHeader>
          <p>
            <span>Email:</span>
            {user?.accountUserId.email}
          </p>
          <p>
            <span>Phone Number:</span>
            {user && 'phoneNumber' in user && user.phoneNumber}
          </p>
          <p>
            <span>Portfolio:</span>
            Portfolio
          </p>
          <p>
            <span>LinkedIn:</span>
            linkedIn
          </p>
        </JobHubProfileHeader>

        <JobHubProfileSummary>
          <h3>Summary</h3>
          {user && 'bio' in user && <p>{user.bio}</p>}
        </JobHubProfileSummary>

        <JobRoleListContainer>
          <h3>Experience</h3>
          <JobRoleUnorderedList>
            {user &&
              'experience' in user &&
              user.experience
                ?.split('\n')
                .filter((text) => text.trim() !== '')
                .map((line, index) => <li key={index}>{line}</li>)}
          </JobRoleUnorderedList>
        </JobRoleListContainer>

        <JobRoleListContainer>
          <h3>Education</h3>
          <JobRoleUnorderedList>
            {user &&
              'education' in user &&
              user.education
                ?.split(',')
                .filter((text) => text.trim() !== '')
                .map((line, index) => <li key={index}>{line}</li>)}
          </JobRoleUnorderedList>
        </JobRoleListContainer>

        <JobRoleListContainer>
          <h3>Education</h3>
          <JobRoleUnorderedList>
            {user &&
              'skills' in user &&
              user.skills
                ?.split(',')
                .filter((text) => text.trim() !== '')
                .map((line, index) => <li key={index}>{line}</li>)}
          </JobRoleUnorderedList>
        </JobRoleListContainer>
        <MultiBtnsWrapper>
          <CustomBtn
            type='submit'
            bgColor='var(--color-bg-100)'
            textColor='var(--color-font-400)'
          >
            Cancel
          </CustomBtn>
          <CustomBtn type='button' onClick={applyToJob}>
            Apply
          </CustomBtn>
        </MultiBtnsWrapper>
      </JobHubProfileContainer>
    </JobHubProfileSection>
  )
}

export default JobHubApplyProfile
