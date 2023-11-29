import React from 'react'

//DATA
import { applyNowContentData } from 'data/find-job/applyNowContentData'

//COMPONENTS
import ApplyNowContents from './Children/ApplyNowContents'
import JobHubProfile from '../JobHubProfile/JobHubProfile'

type Props = {}

const ApplyNowTemplate = (props: Props) => {
  return (
    <main>
      {/* <section>
       <ApplyNowContents {...applyNowContentData}/>
      </section> */}

      <JobHubProfile {...applyNowContentData} />
    </main>
  )
}

export default ApplyNowTemplate
