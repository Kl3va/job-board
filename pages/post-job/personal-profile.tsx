import React from 'react';
import { useAuth } from 'hooks/useAuthProvider';
import JobPostPersonalProfileTemplate from 'components/post-jobs/JobPostPersonalProfile/Children/JobPostPersonalProfileTemplate';

type Props = {};

const CompanyProfileCreate = (props: Props) => {
  const { userType } = useAuth();

  // Render PersonalProfileTemplate if userType is jobSeeker
  return userType === 'employer' && <JobPostPersonalProfileTemplate />;
};

export default CompanyProfileCreate;
