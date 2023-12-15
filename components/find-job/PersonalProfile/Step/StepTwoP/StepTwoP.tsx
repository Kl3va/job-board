import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { PersonalformDatatypes } from '../../PersonalProfileTemplate'

//Styled-Component
import { CustomBtn } from 'styles/globalStyles'
import { StepFormContainer, StepInputWrapper } from '../StepOneP/StepOnePStyles'
import {
  UploaderContent,
  ImageUploadWrapper,
  UploaderBtnWrapper,
  PdfWrapper,
} from './StepTwoPStyles'

interface Props {
  onPrevStep: () => void
  formData: PersonalformDatatypes
}

const StepTwoForm = ({ onPrevStep, formData }: Props) => {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [stepTwoFormData, setStepTwoFormData] = useState({
    education: '',
    currentPosition: '',
    experience: '',
    skills: '',
    yearsOfExperience: 0,
    cvUrl: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setStepTwoFormData({
      ...stepTwoFormData,
      [name]: value,
    })
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click() // Trigger the click event of the file input
  }

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onPrevStep()
  }

  const handleProceedToPage = () => {
    router.push('/apply-for-job/home')
  }

  return (
    <StepFormContainer>
      <StepInputWrapper>
        <label>Education</label>
        <input
          type='text'
          name='education'
          id='education'
          placeholder='Enter your education info'
          value={stepTwoFormData.education}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Current Position</label>
        <input
          type='text'
          name='currentPosition'
          id='currentPosition'
          placeholder='Enter your current position'
          value={stepTwoFormData.currentPosition}
          onChange={handleInputChange}
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
          placeholder='Enter Experience(Please separate with line breaks)'
          value={stepTwoFormData.experience}
          onChange={handleInputChange}
          required
        ></textarea>
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Skills</label>
        <input
          type='text'
          name='skills'
          id='skills'
          placeholder='Enter skills(seperate with commas)'
          value={stepTwoFormData.skills}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Years of experience</label>
        <input
          type='number'
          name='yearsOfExperience'
          id='yearsOfExperience'
          placeholder='Enter a valid number'
          value={stepTwoFormData.yearsOfExperience}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Upload CV</label>
        {selectedFile && (
          <PdfWrapper>
            <span>
              <i className='fa-regular fa-file'></i>
            </span>
            <div>
              <h3>Tech design pdf</h3>
              <p>100% uploaded</p>
            </div>
            <span>
              <i className='fa-regular fa-trash-can'></i>
            </span>
          </PdfWrapper>
        )}
        <ImageUploadWrapper>
          <input
            type='file'
            ref={fileInputRef}
            accept='.pdf' // Specify to accept only PDF files
            style={{ display: 'none' }}
          />

          <UploaderContent onClick={handleButtonClick}>
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
          onClick={handlePrev}
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
