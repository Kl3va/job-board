import React from 'react'
import { applyNowContentData } from 'data/find-job/applyNowContentData'

//Styled-components
import {
  ApplyNowContainer,
  ApplyNowHeader,
  MultiBtnsWrapper,
} from './ApplyNowContentStyles'
import {
  JobRoleListContainer,
  JobRoleUnorderedList,
} from 'components/find-job/FindJobDetail/Children/FindJobDetailMainStyles'

import { CustomBtn } from 'styles/globalStyles'

type Props = typeof applyNowContentData

const ApplyNowContents = ({ header, summary, others }: Props) => {
  return (
    <ApplyNowContainer>
      <ApplyNowHeader>
        <h2>{header.names}</h2>
        <div>
          <span>{header.mail_id}</span>
          <span>{header.phone_address}</span>
        </div>
        <div>
          <span>{header.portfolio_link}</span>
          <span>{header.linkedIn_link}</span>
        </div>
        <span></span>
      </ApplyNowHeader>

      <JobRoleListContainer>
        <h3>{summary.title}</h3>
        <p>{summary.description}</p>
      </JobRoleListContainer>

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
    </ApplyNowContainer>
  )
}

export default ApplyNowContents
