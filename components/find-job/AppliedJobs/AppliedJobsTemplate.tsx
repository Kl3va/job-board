import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AllJobs from '../AllJobs/AllJobs';
import { JobApplicationTypes } from 'types/jobTypes';

//Data
import { jobsData } from 'data/find-job/jobsData';

//Reusable Styled-component
import { FindJobHomeMain } from '../FindJobHome/FindJobHomeStyles';
import { JobSearchIconWrapper } from '../FindJobHeader/FindJobHeaderStyles';
import AppliedJobsLists from './AppliedJobsLists';

export const AppliedJobsInput = styled.input`
  width: min(100%, 20rem);
  padding-inline: 2.5rem 0;
  font-size: 1rem;

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
    padding-left: 1.5rem;
  }
`;

interface FindJobHomeProps {
  jobData: JobApplicationTypes[];
}

const AppliedJobsTemplate = ({ jobData }: FindJobHomeProps) => {
  const [filteredJobs, setFilteredJobs] = useState<
    JobApplicationTypes[] | null
  >(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const filterJobs = () => {
      if (!searchInput.trim()) {
        setFilteredJobs(jobData); // Display all jobs if searchValue is empty
      } else {
        const filtered = jobData.filter((job) =>
          job.jobId?.jobRole?.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredJobs(filtered); // Set filtered jobs
      }
    };

    filterJobs();
  }, [jobData, searchInput]);

  return (
    <FindJobHomeMain>
      <section>
        <JobSearchIconWrapper>
          <AppliedJobsInput
            type="search"
            name=""
            id=""
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </JobSearchIconWrapper>
      </section>

      <section>
        {/* <AllJobs jobData={jobsData} /> */}

        {/* Display JobHomeNoJobs only when filteredJobs is an empty array */}
        {filteredJobs && filteredJobs.length === 0 && (
          <p>{`${searchInput} job doesn't exist!`}</p>
        )}

        {/* Display JobPostAllJobs when there are filtered jobs */}
        {filteredJobs && filteredJobs.length > 0 && (
          <AppliedJobsLists jobData={filteredJobs} />
        )}
        {/* <AppliedJobsLists jobData={jobData} /> */}
      </section>
    </FindJobHomeMain>
  );
};

export default AppliedJobsTemplate;
