import React from 'react'
import { personalProfileData } from 'data/profile'

interface StepperProps {
  heading: string
  steps: {
    id: string
    text: string
  }[]
}

const Stepper = ({ steps, heading }: StepperProps) => {
  return (
    <div>
      <h1>{heading}</h1>
      <div></div>
    </div>
  )
}

export default Stepper
