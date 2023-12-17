import React from 'react'
import { useAuth } from 'hooks/useAuthProvider'
import JobHubApplyProfile from '../JobHubProfile/JobHubApplyProfile'

//DATA
import { applyNowContentData } from 'data/find-job/applyNowContentData'

//COMPONENTS
import ApplyNowContents from './Children/ApplyNowContents'
import JobHubProfile from '../JobHubProfile/JobHubProfile'

type Props = {}

const ApplyNowTemplate = (props: Props) => {
  const {cvOption} = useAuth()
  return (
    <main>
      {/* <section>
       <ApplyNowContents {...applyNowContentData}/>
      </section> */}

      {cvOption === 0 ? (
        <JobHubApplyProfile {...applyNowContentData} />
      ) : (
        <section>
          <ApplyNowContents {...applyNowContentData} />
        </section>
      )}
    </main>
  )
}

export default ApplyNowTemplate
