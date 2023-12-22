import React, { useEffect, useState } from 'react';
import JobHomeNoJobs from './Children/JobHomeNoJobs';
import JobPostAllJobs from '../JobPostAllJobs/JobPostAllJobs';

//Interface
import { SingleJobTypes } from 'types/jobTypes';

//Reusable Styled-components
import { FindJobHomeMain } from 'components/find-job/FindJobHome/FindJobHomeStyles';
import { JobSearchIconWrapper } from 'components/find-job/FindJobHeader/FindJobHeaderStyles';
import { AppliedJobsInput } from 'components/find-job/AppliedJobs/AppliedJobsTemplate';
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn';

//Component based styled-component
import {
  JobHomeHeaderContainer,
  JobHomeHeaderBtnWrapper,
} from './PostJobHomeStyles';

interface Props {
  jobsData: SingleJobTypes[];
}

const PostJobsHomeTemplate = ({ jobsData }: Props) => {
  const [filteredJobs, setFilteredJobs] = useState<SingleJobTypes[] | null>(
    null
  );
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const filterJobs = () => {
      if (!searchInput.trim()) {
        setFilteredJobs(jobsData); // Display all jobs if searchValue is empty
      } else {
        const filtered = jobsData.filter((job) =>
          job.jobRole.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredJobs(filtered); // Set filtered jobs
      }
    };

    filterJobs();
  }, [jobsData, searchInput]);

  return (
    <FindJobHomeMain>
      <section>
        <JobHomeHeaderContainer>
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

          <JobHomeHeaderBtnWrapper>
            <CustomLinkBtn
              href="/post-job/home/job-post"
              text="Post a Job"
              icon="fa-solid fa-plus"
              bgColor="var(--color-accent-100)"
              textColor="var(--color-bg-100)"
            />
          </JobHomeHeaderBtnWrapper>
        </JobHomeHeaderContainer>
      </section>
      <section>
        {/* Display JobHomeNoJobs only when filteredJobs is an empty array */}
        {filteredJobs && filteredJobs.length === 0 && <JobHomeNoJobs />}

        {/* Display JobPostAllJobs when there are filtered jobs */}
        {filteredJobs && filteredJobs.length > 0 && (
          <JobPostAllJobs jobsData={filteredJobs} />
        )}
      </section>
    </FindJobHomeMain>
  );
};

export default PostJobsHomeTemplate;
