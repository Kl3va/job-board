import React from 'react'
//import BreadCrumbs from 'components/global/breadcrumbs/BreadCrumbs'

//Data
import { jobDetailData } from 'data/find-job/jobDetailData'
import { similarJobsData } from 'data/find-job/similarJobsData'

//Components
import FindJobDetailMain from './Children/FindJobDetailMain'
import FindJobDetailApply from './Children/FindJobDetailApply'
import FindJobDetailSimilar from './Children/FindJobDetailSimilar'

//Styled-components
import { FindJobDetailPageMain } from './FindJobDetailStyles'

type Props = {}

const FindJobDetailTemplate = (props: Props) => {
  return (
    <FindJobDetailPageMain>
      <section>
        <FindJobDetailMain {...jobDetailData} />
      </section>
      <aside>
        <FindJobDetailApply {...jobDetailData.about_company} />
      </aside>
      <aside>
        <FindJobDetailSimilar data={similarJobsData} />
      </aside>
    </FindJobDetailPageMain>
  )
}

export default FindJobDetailTemplate
