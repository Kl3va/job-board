import React from 'react';
import { useAuth } from 'hooks/useAuthProvider';
import { useRouter } from 'next/router';
import { CustomBtn } from 'styles/globalStyles';
import styled from 'styled-components';
import { SavedJobRequest } from 'api-requests/job';

export const FindJobDetailApplyNow = styled.div`
  display: grid;
  gap: 1.5rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-font-200);
  }

  p {
    font-size: 1rem;
  }

  button {
    display: grid;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      gap: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

interface ApplyJobProps {
  jobSummary: string;
}

const FindJobDetailApply = ({ jobSummary }: ApplyJobProps) => {
  const { setActiveJobId, handleActivePopup, activeJobId, token, showAlert } =
    useAuth();
  const router = useRouter();
  const { jobID } = router.query;

  const handleJobApply = () => {
    handleActivePopup('apply-popup');
    if (typeof jobID === 'string') {
      setActiveJobId(jobID);
    } else {
      // Handle the case where jobID is undefined or not a string
      console.error('Invalid jobID:', jobID);
    }
  };

  const saveJob = async () => {
    if (token !== null) {
      try {
        await SavedJobRequest(token, jobID as string);

        showAlert(true, 'Job Saved Sucessful!', 'success');
      } catch (error: any) {
        showAlert(true, error.message, 'failure');
      }
    }
  };

  return (
    <FindJobDetailApplyNow>
      <div>
        <h3>{`About`}</h3>
        <a href="#">
          <i className="fa-regular fa-arrow-up-right-from-square"></i>
          Website
        </a>
      </div>
      <p>{jobSummary}</p>
      <CustomBtn onClick={handleJobApply}>Apply Now</CustomBtn>
      <CustomBtn onClick={saveJob}>Save Job</CustomBtn>
    </FindJobDetailApplyNow>
  );
};

export default FindJobDetailApply;
