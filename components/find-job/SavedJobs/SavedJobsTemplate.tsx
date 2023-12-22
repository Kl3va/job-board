import React from 'react';
import { JobApplicationTypes } from 'types/jobTypes';

//Styled-components
import { FindJobHomeMain } from '../FindJobHome/FindJobHomeStyles';

import SavedJobsLists from './SavedJobsLists';

interface FindJobHomeProps {
  jobData: JobApplicationTypes[];
  reFetch: () => void;
}

const SavedJobsTemplate = ({ jobData, reFetch }: FindJobHomeProps) => {
  return (
    <FindJobHomeMain>
      <section>
        <SavedJobsLists jobData={jobData} reFetch={reFetch} />
      </section>
    </FindJobHomeMain>
  );
};

export default SavedJobsTemplate;
