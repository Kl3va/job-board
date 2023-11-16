import React, { useState } from 'react'
import { personalProfileData } from 'data/profile'

import StepTwoForm from './Step/StepTwoP/StepTwoP'
import StepOneForm from './Step/StepOneP/StepOneP'

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
    <main>
      <section>
        <div>
          <div>
            <h1>{heading}</h1>
            <div>
              {steps.map(({ text }, index) => {
                return (
                  <div key={index}>
                    <div>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor:
                            index < currentStep ? 'green' : 'gray', // Change color based on step completion
                          margin: '0 5px',
                        }}
                      >
                        {index + 1}
                      </div>
                      <h2>{text}</h2>
                    </div>
                    {index < totalSteps - 1 && (
                      <div
                        style={{
                          margin: '0 2px',
                          width: '2px',
                          height: '60px',
                          backgroundColor: 'red',
                        }}
                      ></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          {/* Render different form components based on the currentStep */}
          {currentStep === 1 && <StepOneForm onNextStep={handleNextStep} />}
          {currentStep === 2 && <StepTwoForm onNextStep={handleNextStep} />}
        </div>
      </section>
    </main>
  )
}

export default PersonalProfileTemplate
