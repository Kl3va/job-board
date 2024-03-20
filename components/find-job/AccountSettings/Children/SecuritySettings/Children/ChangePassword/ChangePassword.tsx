import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'
import { CustomBtn } from 'styles/globalStyles'

//Reusbale Styled-Components
import {
  PersonalInfoSettingsContainer,
  PersonalInfoSettingsHeader,
  PersonalInfoSettingsForm,
  PersonalInfoSettingsBtnWrapper,
} from '../../../ProfileSettings/Children/PersonalInformationSettings/PersonalInformationSettingsStyles'
import { StepInputWrapper } from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'
StepInputWrapper

type Props = {}

const ChangePassword = (props: Props) => {
  const [toggleForm, setToggleForm] = useState(true)

  const handleFormToggle = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <PersonalInfoSettingsContainer>
      <PersonalInfoSettingsHeader onClick={() => handleFormToggle()}>
        <h2>Change Password</h2>
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
          <StepInputWrapper>
            <label>Current Password</label>
            <input
              type='password'
              name='oldPassword'
              id='oldPassword'
              placeholder='Enter Current Password'
              required
            />
          </StepInputWrapper>

          <StepInputWrapper>
            <label>New Password</label>
            <input
              type='password'
              name='newPassword'
              id='newPassword'
              placeholder='Enter New Password'
              required
            />
          </StepInputWrapper>

          <PersonalInfoSettingsBtnWrapper>
            <CustomBtn
              type='submit'
              bgColor='var(--color-bg-100)'
              textColor='var(--color-font-400)'
              disabled={true}
            >
              Cancel
            </CustomBtn>
            <CustomBtn type='submit' disabled={true}>
              Save
            </CustomBtn>
          </PersonalInfoSettingsBtnWrapper>
        </PersonalInfoSettingsForm>
      </AnimatePresence>
    </PersonalInfoSettingsContainer>
  )
}

export default ChangePassword
