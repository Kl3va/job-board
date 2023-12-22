import React from 'react';
import { applyNowContentData } from 'data/find-job/applyNowContentData';
import Link from 'next/link';
import { ApplyToJobRequest } from 'api-requests/job';
import { useAuth } from 'hooks/useAuthProvider';

//Styled-components
import {
  ApplyNowContainer,
  ApplyNowHeader,
  MultiBtnsWrapper,
} from './ApplyNowContentStyles';
import {
  JobRoleListContainer,
  JobRoleUnorderedList,
} from 'components/find-job/FindJobDetail/Children/FindJobDetailMainStyles';
import { CustomBtn } from 'styles/globalStyles';

type Props = typeof applyNowContentData;

const ApplyNowContents = ({ header, summary, others }: Props) => {
  const { activeJobId, token, showAlert, user } = useAuth();

  const applyToJob = async () => {
    if (token !== null) {
      try {
        const data = await ApplyToJobRequest(token, activeJobId);

        showAlert(true, 'Job Application Sucessful!', 'success');
      } catch (error: any) {
        showAlert(true, error.message, 'failure');
      }
    }
  };

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
                return <li key={index}>{list}</li>;
              })}
            </JobRoleUnorderedList>
          </JobRoleListContainer>
        );
      })}
      <MultiBtnsWrapper>
        <Link href={'/apply-for-job/home'} passHref>
          <CustomBtn
            type="submit"
            bgColor="var(--color-bg-100)"
            textColor="var(--color-font-400)"
          >
            Cancel
          </CustomBtn>
        </Link>

        <CustomBtn type="button" onClick={applyToJob}>
          Apply
        </CustomBtn>
      </MultiBtnsWrapper>
    </ApplyNowContainer>
  );
};

export default ApplyNowContents;
