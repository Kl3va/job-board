import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetJobRequest } from 'api-requests/job'
import FindJobDetailTemplate from 'components/find-job/FindJobDetail/FindJobDetailTemplate'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import { SingleJobTypes } from 'types/jobTypes'
import ApplyingPop from 'components/global/pop-ups/apply-popup/ApplyingPop'
import { useAuth } from 'hooks/useAuthProvider'

type Props = {}

const JobID = (props: Props) => {
  const router = useRouter()
  const { jobID } = router.query
  const [jobDetails, setJobDetails] = useState<SingleJobTypes>(
    {} as SingleJobTypes
  )

  const { activePopup } = useAuth()

  useEffect(() => {
    if (typeof jobID === 'string') {
      const token = localStorage.getItem('userToken')

      if (token) {
        GetJobRequest(token, jobID)
          .then((data) => {
            setJobDetails(data)
          })
          .catch((error) => {
            console.error('Error fetching job details:', error)
          })
      }
    }
  }, [jobID])

  return (
    <FindJobLayout>
      {Object.keys(jobDetails).length !== 0 ? ( // Check if jobDetails is not an empty object before rendering The DetailTemplate
        <FindJobDetailTemplate jobDetails={jobDetails} />
      ) : (
        <p>Loading...</p>
      )}
      {activePopup === 'apply-popup' && <ApplyingPop />}
    </FindJobLayout>
  )
}

export default JobID
