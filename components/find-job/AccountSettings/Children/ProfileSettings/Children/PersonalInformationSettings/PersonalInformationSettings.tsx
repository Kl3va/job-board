import React, { useState } from 'react'
import Image from 'next/image'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'
import profileImage from 'public/images/jobhub-avatar.png'
import { AnimatePresence } from 'framer-motion'
import { CustomBtn } from 'styles/globalStyles'
import { StepOneData } from 'components/find-job/PersonalProfile/PersonalProfileTemplate'
import { useAuth } from 'hooks/useAuthProvider'

//Reusable Styled-component
import {
  StepInputWrapper,
  StepSelectContainer,
} from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'
import {
  ImageUploadWrapper,
  UploaderContent,
} from 'components/find-job/PersonalProfile/Step/StepTwoP/StepTwoPStyles'

//Styled-Components
import {
  PersonalInfoSettingsBtnWrapper,
  PersonalInfoSettingsContainer,
  PersonalInfoSettingsForm,
  PersonalInfoSettingsFormHeader,
  PersonalInfoSettingsHeader,
  PersonalInfoSettingsImgWrapper,
  PersonalInfoSettingsSelectWrapper,
} from './PersonalInformationSettingsStyles'

interface Props {
  updateFormData: (data: StepOneData) => void
}

const PersonalInformationSettings = ({ updateFormData }: Props) => {
  const [toggleForm, setToggleForm] = useState(false)
  const { showAlert } = useAuth()
  const [PersonalInfoFormData, setPersonalInfoFormData] = useState<StepOneData>(
    {
      phoneNumber: '',
      bio: '',
      dateOfBirth: '',
      gender: 'male',
      location: 'United-Kingdom',
    }
  )

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      PersonalInfoFormData.bio &&
      PersonalInfoFormData.phoneNumber &&
      PersonalInfoFormData.dateOfBirth &&
      PersonalInfoFormData.location &&
      PersonalInfoFormData.gender
    ) {
      updateFormData(PersonalInfoFormData)
      showAlert(true, 'Saved', 'success')
      setPersonalInfoFormData({
        phoneNumber: '',
        bio: '',
        dateOfBirth: '',
        gender: 'male',
        location: 'United-Kingdom',
      })
      handleFormToggle()
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setPersonalInfoFormData({
      ...PersonalInfoFormData,
      [name]: value,
    })
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPersonalInfoFormData({
      phoneNumber: '',
      bio: '',
      dateOfBirth: '',
      gender: 'male',
      location: 'United-Kingdom',
    })
  }

  const handleFormToggle = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <PersonalInfoSettingsContainer>
      <PersonalInfoSettingsHeader onClick={() => handleFormToggle()}>
        <h2>Personal Information</h2>
        {toggleForm ? (
          <span>
            <i className='fa-regular fa-chevron-down'></i>
          </span>
        ) : (
          <span>
            <i className='fa-regular fa-chevron-up'></i>
          </span>
        )}
      </PersonalInfoSettingsHeader>
      <AnimatePresence>
        <PersonalInfoSettingsForm
          onSubmit={handleFormSubmit}
          formToggle={toggleForm === false}
          variants={faqToggleVariant()}
          initial={toggleForm === false ? 'hidden' : 'initial'}
          animate={toggleForm === false ? 'show' : 'hidden'}
          exit={{
            height: '0px',
            transition: {
              type: 'spring',
              duration: 1,
              bounce: 0.3,
            },
          }}
        >
          <PersonalInfoSettingsFormHeader>
            <PersonalInfoSettingsImgWrapper>
              <Image src={profileImage} alt='Profile-Image' />
            </PersonalInfoSettingsImgWrapper>
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
                  <span>Click to upload</span> or drag and drop
                  PDF(max.800x400px)
                </p>
              </UploaderContent>
            </ImageUploadWrapper>
          </PersonalInfoSettingsFormHeader>

          <StepInputWrapper>
            <label>Bio</label>
            <textarea
              name='bio'
              id='bio'
              cols={20}
              rows={4}
              placeholder='Enter Brief Summary'
              value={PersonalInfoFormData.bio}
              onChange={handleInputChange}
              required
            ></textarea>
          </StepInputWrapper>

          <PersonalInfoSettingsSelectWrapper>
            <StepInputWrapper>
              <label>Date of Birth</label>
              <input
                type='date'
                name='dateOfBirth'
                id='dateOfBirth'
                placeholder='Select date'
                value={PersonalInfoFormData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </StepInputWrapper>

            <StepInputWrapper>
              <label>Phone Number</label>
              <input
                type='number'
                name='phoneNumber'
                id='phoneNumber'
                placeholder='Must be 11 characters+'
                value={PersonalInfoFormData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </StepInputWrapper>
          </PersonalInfoSettingsSelectWrapper>

          <PersonalInfoSettingsSelectWrapper>
            <StepInputWrapper>
              <label>Gender</label>
              <select
                name='gender'
                id='gender'
                value={PersonalInfoFormData.gender}
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
                value={PersonalInfoFormData.location}
                onChange={handleInputChange}
                required
              >
                <option value='United-kingdom'>United-Kingdom</option>
              </select>
            </StepInputWrapper>
          </PersonalInfoSettingsSelectWrapper>

          <PersonalInfoSettingsBtnWrapper>
            <CustomBtn
              type='submit'
              bgColor='var(--color-bg-100)'
              textColor='var(--color-font-400)'
              onClick={handleCancel}
            >
              Cancel
            </CustomBtn>
            <CustomBtn type='submit'>Save</CustomBtn>
          </PersonalInfoSettingsBtnWrapper>
        </PersonalInfoSettingsForm>
      </AnimatePresence>
    </PersonalInfoSettingsContainer>
  )
}

export default PersonalInformationSettings
