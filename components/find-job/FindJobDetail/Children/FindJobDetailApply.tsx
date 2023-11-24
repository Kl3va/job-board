import React from 'react'
import { CustomBtn } from 'styles/globalStyles'
import styled from 'styled-components'


export const FindJobDetailApplyNow = styled.div`
  display: grid;
  gap: 1.5rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-font-200);
  }

  p {
    font-size: 1rem;
  }

  button {
    display: grid;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      gap: 0.5rem;
      font-size: 0.8rem;
    }
  }
`

interface ApplyJobProps {
  names: string
  link: string
  description: string
}

const FindJobDetailApply = ({ names, link, description }: ApplyJobProps) => {
  return (
    <FindJobDetailApplyNow>
      <div>
        <h3>{`About: ${names}`}</h3>
        <a href={link}>
          <i className='fa-regular fa-arrow-up-right-from-square'></i>
          Website
        </a>
      </div>
      <p>{description}</p>
      <CustomBtn>Apply Now</CustomBtn>
      <CustomBtn>Save Job</CustomBtn>
    </FindJobDetailApplyNow>
  )
}

export default FindJobDetailApply
