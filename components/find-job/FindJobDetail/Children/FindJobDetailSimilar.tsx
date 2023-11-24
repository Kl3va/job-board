import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

//Styled-components
import { JobRoleHeader } from './FindJobDetailMainStyles'

export const FindJobDetailSimilarContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-font-200);
  }

  & > div {
    display: grid;
    gap: 1.5rem;

    & > div {
      border-radius: 0.5rem;
      border: 1px solid var(--color-accent-200);
      padding: 1.5rem;

      a {
        font-size: 0.875rem;
        transition: var(--transition);

        &:hover {
          color: var(--color-accent-100);
        }
      }
    }
  }
`

interface Props {
  data: {
    job_role: string
    job_picture: StaticImageData
    company: string
    location: string
    url: string
    id: number
  }[]
}

const FindJobDetailSimilar = ({ data }: Props) => {
  return (
    <FindJobDetailSimilarContainer>
      <h3>Similar Job Posts</h3>
      <div>
        {data.map(({ job_picture, job_role, company, id, location, url }) => {
          return (
            <div key={id}>
              <JobRoleHeader>
                <div>
                  <Image src={job_picture} alt='job-image' />
                </div>
                <div>
                  <h3>{job_role}</h3>
                  <p>{`${company}. ${location}`}</p>
                </div>
              </JobRoleHeader>
              <Link href={url}>View</Link>
            </div>
          )
        })}
      </div>
    </FindJobDetailSimilarContainer>
  )
}

export default FindJobDetailSimilar
