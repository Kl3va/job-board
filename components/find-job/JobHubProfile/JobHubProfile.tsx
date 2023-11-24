import React from 'react'
import Image from 'next/image'
import { applyNowContentData } from 'data/post-job/applyNowContentData'

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

const JobHubProfile = ({ profile, header, summary, others }: Props) => {
  return (
    <JobHubProfileSection>
      <JobHubProfileContainer>
        <JobHubProfileInfo>
          <div>
            <Image src={profile.image} alt='profile-image' />
          </div>
          <div>
            <h2>{header.names}</h2>
            <JobRoleSpan>
              <div>
                <Image src={profile.icon} />
              </div>
              <p>{profile.role}</p>
            </JobRoleSpan>
          </div>
        </JobHubProfileInfo>

        <JobHubProfileHeader>
          <p>
            <span>Email:</span>
            {header.mail_id}
          </p>
          <p>
            <span>Phone Number:</span>
            {header.phone_address}
          </p>
          <p>
            <span>Portfolio:</span>
            {header.portfolio_link}
          </p>
          <p>
            <span>LinkedIn:</span>
            {header.linkedIn_link}
          </p>
        </JobHubProfileHeader>

        <JobHubProfileSummary>
          <h3>{summary.title}</h3>
          <p>{summary.description}</p>
        </JobHubProfileSummary>

        {others.map((other, index) => {
          return (
            <JobRoleListContainer key={index}>
              <h3>{other.title}</h3>
              <JobRoleUnorderedList>
                {other.info.map((list, index) => {
                  return <li key={index}>{list}</li>
                })}
              </JobRoleUnorderedList>
            </JobRoleListContainer>
          )
        })}
        <MultiBtnsWrapper>
          <CustomBtn
            type='submit'
            bgColor='var(--color-bg-100)'
            textColor='var(--color-font-400)'
          >
            Cancel
          </CustomBtn>
          <CustomBtn type='submit'>Apply</CustomBtn>
        </MultiBtnsWrapper>
      </JobHubProfileContainer>
    </JobHubProfileSection>
  )
}

export default JobHubProfile
