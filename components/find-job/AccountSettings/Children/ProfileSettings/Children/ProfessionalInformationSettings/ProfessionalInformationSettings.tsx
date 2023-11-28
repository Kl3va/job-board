import React, { useState } from 'react'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'

import { CustomBtn } from 'styles/globalStyles'

//Reusable Styled-components
import {
  PersonalInfoSettingsBtnWrapper,
  PersonalInfoSettingsContainer,
  PersonalInfoSettingsForm,
  PersonalInfoSettingsHeader,
} from '../PersonalInformationSettings/PersonalInformationSettingsStyles'

import { StepInputWrapper } from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'
import {
  ImageUploadWrapper,
  UploaderContent,
} from 'components/find-job/PersonalProfile/Step/StepTwoP/StepTwoPStyles'

type Props = {}

const ProfessionalInformationSettings = (props: Props) => {
  const [toggleForm, setToggleForm] = useState(false)

  const handleFormToggle = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <PersonalInfoSettingsContainer>
      <PersonalInfoSettingsHeader onClick={() => handleFormToggle()}>
        <h2>Professional Information</h2>
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

      <PersonalInfoSettingsForm
        formToggle={!toggleForm}
        variants={faqToggleVariant()}
        initial={!toggleForm ? 'hidden' : 'initial'}
        animate={!toggleForm ? 'show' : 'hidden'}
        exit={{
          height: '0px',
          transition: {
            type: 'spring',
            duration: 1,
            bounce: 0.3,
          },
        }}
      >
        <StepInputWrapper>
          <label>Role</label>
          <input
            type='text'
            name='role'
            id='role'
            placeholder='Enter Job role'
            required
          />
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Summary</label>
          <textarea
            name='summary'
            id='summary'
            cols={20}
            rows={4}
            placeholder='Enter summary'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Experience</label>
          <textarea
            name='experience'
            id='experience'
            cols={20}
            rows={4}
            placeholder='Enter experience'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Education</label>
          <textarea
            name='education'
            id='education'
            cols={20}
            rows={4}
            placeholder='Education'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Skills</label>
          <textarea
            name='skills'
            id='skills'
            cols={20}
            rows={4}
            placeholder='Enter skills'
            required
          ></textarea>
          <p>275 characters left</p>
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
    </PersonalInfoSettingsContainer>
  )
}

export default ProfessionalInformationSettings
