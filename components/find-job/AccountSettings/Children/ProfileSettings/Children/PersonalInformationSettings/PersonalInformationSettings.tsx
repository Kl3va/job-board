import React, { useState } from 'react'
import Image from 'next/image'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'
import profileImage from 'public/images/jobhub-avatar.png'
import { AnimatePresence } from 'framer-motion'
import { CustomBtn } from 'styles/globalStyles'

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

type Props = {}

const PersonalInformationSettings = (props: Props) => {
  const [toggleForm, setToggleForm] = useState(false)

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
            <label>Full name</label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              placeholder='Enter Full name'
              required
            />
          </StepInputWrapper>

          <PersonalInfoSettingsSelectWrapper>
            <StepInputWrapper>
              <label>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email'
                required
              />
            </StepInputWrapper>

            <StepInputWrapper>
              <label>Phone Number</label>
              <input
                type='number'
                name='phone'
                id='phone'
                placeholder='Enter phone number'
                required
              />
            </StepInputWrapper>
          </PersonalInfoSettingsSelectWrapper>

          <PersonalInfoSettingsSelectWrapper>
            <StepInputWrapper>
              <label>Gender</label>
              <select name='gender' id='gender'>
                <option value='select'>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='others'>Others</option>
              </select>
            </StepInputWrapper>

            <StepInputWrapper>
              <label>Location</label>
              <select name='location' id='location'>
                <option value='select'>Select Location</option>
                <option value='male'>Lagos, Nigeria</option>
                <option value='female'>London, Uk</option>
                <option value='others'>Abuja, Nigeria</option>
              </select>
            </StepInputWrapper>
          </PersonalInfoSettingsSelectWrapper>

          <PersonalInfoSettingsBtnWrapper>
            <CustomBtn
              type='submit'
              bgColor='var(--color-bg-100)'
              textColor='var(--color-font-400)'
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
