import React from 'react'
import styled from 'styled-components'
import { QUERIES } from 'styles/mediaQueries'
import FindJobDetailMain from 'components/find-job/FindJobDetail/Children/FindJobDetailMain'
import { SingleJobTypes } from 'types/jobTypes'

const PostJobDetailMain = styled.main`
  width: min(90%, 58.75rem);
  margin-inline: auto;
  padding-block: 2rem;

  display: grid;
  gap: 2rem;

  & > * {
    border-radius: 0.5rem;
    border: 1px solid #f2f4f7;
    background: #fcfcfd;
    width: 100%;
    padding: 0.5rem;

    @media ${QUERIES.tablet} {
      padding: 2rem;
    }
  }
`

interface Props {
  jobDetails: SingleJobTypes
}

const JobPostDetailTemplate = ({ jobDetails }: Props) => {
  return (
    <PostJobDetailMain>
      <section>
        <FindJobDetailMain {...jobDetails} />
      </section>
    </PostJobDetailMain>
  )
}

export default JobPostDetailTemplate
