import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'

//Componenet based Styled-component
import { DeleteAccountBtnWrapper } from './DeleteAccountStyles'

//Reusbale Styled-Components
import {
  PersonalInfoSettingsContainer,
  PersonalInfoSettingsHeader,
  PersonalInfoSettingsForm,
} from '../../../ProfileSettings/Children/PersonalInformationSettings/PersonalInformationSettingsStyles'

type Props = {}

const DeleteAccount = (props: Props) => {
  const [toggleForm, setToggleForm] = useState(true)

  const handleFormToggle = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <PersonalInfoSettingsContainer>
      <PersonalInfoSettingsHeader onClick={() => handleFormToggle()}>
        <h2>Delete Account</h2>
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
          <DeleteAccountBtnWrapper>
            <button type='submit' disabled={true}>
              Delete account
            </button>
          </DeleteAccountBtnWrapper>
        </PersonalInfoSettingsForm>
      </AnimatePresence>
    </PersonalInfoSettingsContainer>
  )
}

export default DeleteAccount
