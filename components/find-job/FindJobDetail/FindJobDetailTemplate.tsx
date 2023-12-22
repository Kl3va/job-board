import React from 'react';
import { SingleJobTypes } from 'types/jobTypes';
//import BreadCrumbs from 'components/global/breadcrumbs/BreadCrumbs'

//Components
import FindJobDetailMain from './Children/FindJobDetailMain';
import FindJobDetailApply from './Children/FindJobDetailApply';

//Styled-components
import { FindJobDetailPageMain } from './FindJobDetailStyles';

interface Props {
  jobDetails: SingleJobTypes;
}

const FindJobDetailTemplate = ({ jobDetails }: Props) => {
  return (
    <FindJobDetailPageMain>
      <section>
        <FindJobDetailMain {...jobDetails} />
      </section>
      <aside>
        <FindJobDetailApply jobSummary={jobDetails.jobSummary} />
      </aside>
    </FindJobDetailPageMain>
  );
};

export default FindJobDetailTemplate;
