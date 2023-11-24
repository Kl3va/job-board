import React from 'react'
import { useRouter } from 'next/router'

//Styled-Component
import { CustomBtn } from 'styles/globalStyles'
import { StepFormContainer, StepInputWrapper } from '../StepOneP/StepOnePStyles'
import {
  UploaderContent,
  ImageUploadWrapper,
  UploaderBtnWrapper,
} from './StepTwoPStyles'

interface Props {
  onPrevStep: () => void
}

const StepTwoForm = ({ onPrevStep }: Props) => {
  const router = useRouter()

  const handleProceedToPage = () => {
    router.push('/apply-for-job/home')
  }

  return (
    <StepFormContainer>
      <StepInputWrapper>
        <label>Education</label>
        <input
          type='text'
          name='educate'
          id='educate'
          placeholder='Enter your education info'
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Current Position</label>
        <input
          type='text'
          name='position'
          id='position'
          placeholder='Enter your current position'
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Experience</label>
        <textarea
          name='experience'
          id='experience'
          cols={20}
          rows={4}
          placeholder='Enter Brief Summary'
          required
        ></textarea>
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Skills</label>
        <input type='text' name='skills' id='skills' placeholder='' required />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Years of experience</label>
        <input type='number' name='level' id='level' placeholder='' required />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Upload CV</label>
        <ImageUploadWrapper>
          <input
            type='file'
            accept='.pdf' // Specify to accept only PDF files
            style={{ display: 'none' }}
          />

          <UploaderContent>
            <span>
              <i className='fa-regular fa-cloud-arrow-up'></i>
            </span>
            <p>
              <span>Click to upload</span> or drag and drop PDF(max.800x400px)
            </p>
          </UploaderContent>
        </ImageUploadWrapper>
      </StepInputWrapper>

      <UploaderBtnWrapper>
        <CustomBtn
          type='submit'
          onClick={onPrevStep}
          bgColor='var(--color-bg-100)'
          textColor='var(--color-font-400)'
        >
          Back
        </CustomBtn>
        <CustomBtn type='submit' onClick={handleProceedToPage}>
          Proceed
        </CustomBtn>
      </UploaderBtnWrapper>
    </StepFormContainer>
  )
}

export default StepTwoForm
