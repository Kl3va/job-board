import React from 'react'
import { CustomBtn } from 'styles/globalStyles'

//styled-component
import {
  StepFormContainer,
  StepInputWrapper,
  StepSelectContainer,
} from './StepOnePStyles'

interface Props {
  onNextStep: () => void
}

const StepOneForm = ({ onNextStep }: Props) => {
  return (
    <StepFormContainer>
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

      <StepInputWrapper>
        <label>Bio</label>
        <textarea
          name='bio'
          id='bio'
          cols={20}
          rows={4}
          placeholder='Enter Brief Summary'
          required
        ></textarea>
        <p>275 characters left</p>
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Phone Number</label>
        <input
          type='date'
          name='date'
          id='date'
          placeholder='Select date'
          required
        />
      </StepInputWrapper>

      <StepSelectContainer>
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
      </StepSelectContainer>

      <CustomBtn type='submit' onClick={onNextStep}>
        Proceed
      </CustomBtn>
    </StepFormContainer>
  )
}

export default StepOneForm
