import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import PostJobsLayout from 'components/post-jobs/PostJobsLayout/PostJobsLayout';
import { SingleJobTypes } from 'types/jobTypes';
import { GetJobRequest } from 'api-requests/job';
import { useAuth } from 'hooks/useAuthProvider';
import { useRouter } from 'next/router';
import JobPostDetailTemplate from 'components/post-jobs/JobPostDetail/JobPostDetailTemplate';

const PostJobDetailPage = () => {
  const router = useRouter();
  const { jobID } = router.query;
  const [jobDetails, setJobDetails] = useState<SingleJobTypes>(
    {} as SingleJobTypes
  );

  useEffect(() => {
    let isMounted = true;

    if (typeof jobID === 'string') {
      const token = localStorage.getItem('userToken');

      if (token) {
        GetJobRequest(token, jobID)
          .then((data) => {
            setJobDetails(data);
          })
          .catch((error) => {
            console.error('Error fetching job details:', error);
          });
      }
    }

    return () => {
      isMounted = false;
    };
  }, [jobID]);

  return (
    <PostJobsLayout>
      {Object.keys(jobDetails).length !== 0 ? ( // Check if jobDetails is not an empty object before rendering JobPostDetailTemplate
        <JobPostDetailTemplate jobDetails={jobDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </PostJobsLayout>
  );
};

export default PostJobDetailPage;
