import React from 'react';
import Image from 'next/image';
import { JobDataTypes, SingleJobTypes } from 'types/jobTypes';

//Reusable Styled-components
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn';
import { formatDate } from 'helper';

//Default images
import JobLogo from 'public/images/job-logo.png';
import dotIcon from 'public/images/dot.png';

//Component-based styled-components
import {
  JobsContainer,
  JobAboutContainer,
  JobAboutSecondary,
  JobHeader,
  JobWrapper,
} from './AllJobsStyles';

interface AllJobHomeTypes {
  jobData: SingleJobTypes[];
}

const AllJobs = ({ jobData }: AllJobHomeTypes) => {
  return (
    <JobsContainer>
      {jobData.map((data, id) => {
        return (
          <JobWrapper key={id}>
            <JobHeader>
              <div>
                <Image src={JobLogo} alt="job-image" />
              </div>
              <div>
                <h3>{data.jobRole}</h3>
                <p>{`Wiki. United-Kingdom`}</p>
              </div>
              <div>
                <span>
                  <i className="fa-regular fa-bookmark"></i>
                </span>
              </div>
            </JobHeader>
            <p>{data.jobSummary}</p>
            <JobAboutContainer>
              <span>
                <i className="fa-regular fa-clock"></i>
                {data.employmentType}
              </span>
              <span>
                <i className="fa-regular fa-dollar-sign"></i>
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
              href={`/apply-for-job/home/${data._id}`}
              text="View Post"
              bgColor="var(--color-accent-100)"
              textColor="var(--color-bg-100)"
            />
          </JobWrapper>
        );
      })}
    </JobsContainer>
  );
};

export default AllJobs;
