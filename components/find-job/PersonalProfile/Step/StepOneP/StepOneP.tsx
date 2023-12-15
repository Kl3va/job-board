import React, { useState } from 'react'
import { CustomBtn } from 'styles/globalStyles'

//styled-component
import {
  StepFormContainer,
  StepInputWrapper,
  StepSelectContainer,
} from './StepOnePStyles'

interface StepOneData {
  phoneNumber: string
  bio: string
  dateOfBirth: string
  gender: string
  location: string
}

interface Props {
  onNextStep: () => void
  updateFormData: (data: StepOneData) => void
}

const StepOneForm = ({ onNextStep, updateFormData }: Props) => {
  const [stepOneFormData, setStepOneFormData] = useState<StepOneData>({
    phoneNumber: '',
    bio: '',
    dateOfBirth: '',
    gender: 'male',
    location: 'United-Kingdom',
  })

  const maxBioLength = 275

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      stepOneFormData.bio &&
      stepOneFormData.phoneNumber &&
      stepOneFormData.dateOfBirth &&
      stepOneFormData.location &&
      stepOneFormData.gender
    ) {
      updateFormData(stepOneFormData)
      onNextStep()
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    if (name === 'bio' && value.length <= maxBioLength) {
      setStepOneFormData({
        ...stepOneFormData,
        bio: value,
      })
    } else if (name !== 'bio') {
      setStepOneFormData({
        ...stepOneFormData,
        [name]: value,
      })
    }
  }

  return (
    <StepFormContainer onSubmit={handleFormSubmit}>
      <StepInputWrapper>
        <label>Phone Number</label>
        <input
          type='number'
          name='phoneNumber'
          id='phoneNumber'
          placeholder='Enter phone number'
          value={stepOneFormData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Bio</label>
        <textarea
          name='bio'
          id='bio'
          cols={20}
          rows={4}
          placeholder='Enter Brief Summary'
          value={stepOneFormData.bio}
          onChange={handleInputChange}
          required
        ></textarea>
        <p>{maxBioLength - stepOneFormData.bio.length} characters left</p>
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Date of Birth</label>
        <input
          type='date'
          name='dateOfBirth'
          id='dateOfBirth'
          placeholder='Select date'
          value={stepOneFormData.dateOfBirth}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepSelectContainer>
        <StepInputWrapper>
          <label>Gender</label>
          <select
            name='gender'
            id='gender'
            value={stepOneFormData.gender}
            onChange={handleInputChange}
            required
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
          </select>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Location</label>
          <select
            name='location'
            id='location'
            value={stepOneFormData.location}
            onChange={handleInputChange}
            required
          >
            <option value='United-kingdom'>United-Kingdom</option>
          </select>
        </StepInputWrapper>
      </StepSelectContainer>

      <CustomBtn type='submit'>Proceed</CustomBtn>
    </StepFormContainer>
  )
}

export default StepOneForm
