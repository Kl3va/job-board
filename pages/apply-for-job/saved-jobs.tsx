import React, { useState, useEffect } from 'react';
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout';
import SavedJobsTemplate from 'components/find-job/SavedJobs/SavedJobsTemplate';
import { JobApplicationTypes } from 'types/jobTypes';
import { AllSavedJobRequest } from 'api-requests/job';

type Props = {};

const SavedJobsPage = (props: Props) => {
  const [jobsData, setJobsData] = useState<JobApplicationTypes[] | null>(null);

  const fetchJobsData = () => {
    const token = localStorage.getItem('userToken');

    if (token) {
      AllSavedJobRequest(token)
        .then((data) => {
          setJobsData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };

  useEffect(() => {
    let isMounted = true;

    fetchJobsData();

    return () => {
      isMounted = false;
    };
  }, []); // Only fetch on mount

  const handleRefetch = () => {
    fetchJobsData();
  };

  return (
    <FindJobLayout>
      {jobsData !== null ? (
        <SavedJobsTemplate jobData={jobsData} reFetch={handleRefetch} />
      ) : (
        <p>Loading...</p>
      )}
    </FindJobLayout>
  );
};

export default SavedJobsPage;
