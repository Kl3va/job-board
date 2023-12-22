import React from 'react';
import { useAuth } from 'hooks/useAuthProvider';
import JobHubApplyProfile from '../JobHubProfile/JobHubApplyProfile';

//DATA
import { applyNowContentData } from 'data/find-job/applyNowContentData';

//COMPONENTS
import ApplyNowContents from './Children/ApplyNowContents';

type Props = {};

const ApplyNowTemplate = (props: Props) => {
  const { cvOption } = useAuth();
  return (
    <main>
      {cvOption === 0 ? (
        <JobHubApplyProfile {...applyNowContentData} />
      ) : (
        <section>
          <ApplyNowContents {...applyNowContentData} />
        </section>
      )}
    </main>
  );
};

export default ApplyNowTemplate;
