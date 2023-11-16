import React, { useState } from 'react'
import Image from 'next/image'
import { personalProfileData } from 'data/profile'

import profileBg from 'public/images/personal-profile-bg.png'

//COMPONENTS
import StepTwoForm from './Step/StepTwoP/StepTwoP'
import StepOneForm from './Step/StepOneP/StepOneP'

//STYLED-COMPONENTS
import {
  MainPersonalProfile,
  PersonalProgressContainer,
  PersonalProfileFormContainer,
  PersonalProfileFormSection,
  StepperWrapper,
  StepSection,
  StepIndicator,
  StepsWrapper,
  SteppersContainer,
  PersonalProfileBg,
  PersonalProfileLine,
} from './PersonalProfileStyles'

type Props = {}

const PersonalProfileTemplate = (props: Props) => {
  const totalSteps = personalProfileData.steps.length
  const { steps, heading } = personalProfileData

  const [currentStep, setCurrentStep] = useState(1)

  // Function to handle moving to the next step
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  return (
    <MainPersonalProfile>
      <StepSection>
        <StepperWrapper>
          <h1>{heading}</h1>
          <PersonalProgressContainer>
            {steps.map(({ text }, index) => {
              return (
                <StepsWrapper key={index}>
                  <SteppersContainer>
                    <StepIndicator index={index} currentStep={currentStep}>
                      {index + 1}
                    </StepIndicator>
                    <h2>{text}</h2>
                    {index < currentStep - 1 && (
                      <i className='fa-solid fa-check'></i>
                    )}
                  </SteppersContainer>
                  {index < totalSteps - 1 && (
                    <PersonalProfileLine></PersonalProfileLine>
                  )}
                </StepsWrapper>
              )
            })}
          </PersonalProgressContainer>
          <PersonalProfileBg>
            <Image src={profileBg} alt='profile-bg' />
          </PersonalProfileBg>
        </StepperWrapper>
      </StepSection>
      <PersonalProfileFormSection>
        <PersonalProfileFormContainer>
          {/* Render different form components based on the currentStep */}
          {currentStep === 1 && <StepOneForm onNextStep={handleNextStep} />}
          {currentStep === 2 && <StepTwoForm onNextStep={handleNextStep} />}
        </PersonalProfileFormContainer>
      </PersonalProfileFormSection>
    </MainPersonalProfile>
  )
}

export default PersonalProfileTemplate
