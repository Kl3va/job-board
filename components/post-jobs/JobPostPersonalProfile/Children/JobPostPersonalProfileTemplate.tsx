import React, { useState } from 'react'
import Image from 'next/image'
import { companyProfileData } from 'data/profile'
import profileBg from 'public/images/personal-profile-bg.png'

import StepCompanyForm from '../Step/StepProceed'

import {
  MainPersonalProfile,
  StepSection,
  StepperWrapper,
  PersonalProgressContainer,
  StepsWrapper,
  SteppersContainer,
  StepIndicator,
  PersonalProfileLine,
  PersonalProfileBg,
  PersonalProfileFormContainer,
  PersonalProfileFormSection,
} from 'components/find-job/PersonalProfile/PersonalProfileStyles'

const JobPostPersonalProfileTemplate = () => {
  const totalSteps = companyProfileData.steps.length
  const { steps, heading } = companyProfileData

  const [currentStep, setCurrentStep] = useState(1)

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
          {currentStep === 1 && <StepCompanyForm />}
        </PersonalProfileFormContainer>
      </PersonalProfileFormSection>
    </MainPersonalProfile>
  )
}

export default JobPostPersonalProfileTemplate
