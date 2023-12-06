import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuthProvider'
import {
  CreateEmployerProfileRequest,
  UpdateEmployerProfileRequest,
} from 'api-requests/account-user'

//Styled-Component
import { CustomBtn } from 'styles/globalStyles'

import {
  StepFormContainer,
  StepInputWrapper,
  StepSelectContainer,
  StepDoubleInputWrapper,
} from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'

const StepCompanyForm = () => {
  const router = useRouter()
  const { token } = useAuth()

  const [formData, setFormData] = useState({
    aboutCompany: '',
    companyAddress: '',
    companyWebsite: '',
    companySize: '',
    location: '',
  })

  // Update form data on field changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Exclude location field before sending data to API
    const { location, ...dataToSend } = formData

    if (
      formData.aboutCompany &&
      formData.companyAddress &&
      formData.companySize &&
      formData.companyWebsite &&
      token !== null
    ) {
      try {
        // Send dataToSend (without location) to your API
        const data = await CreateEmployerProfileRequest(dataToSend, token)
        console.log(data, 'success')
        setFormData({
          aboutCompany: '',
          companyAddress: '',
          companyWebsite: '',
          companySize: '',
          location: '',
        })

        //Redirect on successful submission
        router.push('/post-job/home')
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }
  }

  return (
    <StepFormContainer onSubmit={handleSubmit}>
      <StepInputWrapper>
        <label>About company</label>
        <textarea
          name='aboutCompany'
          id='aboutCompany'
          cols={20}
          rows={4}
          placeholder='Enter Brief Summary'
          value={formData.aboutCompany}
          onChange={handleChange}
          required
        ></textarea>
      </StepInputWrapper>

      <StepDoubleInputWrapper>
        <StepInputWrapper>
          <label>Address</label>
          <input
            type='text'
            name='companyAddress'
            id='companyAddress'
            placeholder='Enter Address'
            value={formData.companyAddress}
            onChange={handleChange}
            required
          />
        </StepInputWrapper>

        <StepInputWrapper>
          <label>City/Country</label>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Enter Location'
            value={formData.location}
            onChange={handleChange}
          />
        </StepInputWrapper>
      </StepDoubleInputWrapper>

      <StepInputWrapper>
        <label>Company's website</label>
        <input
          type='text'
          name='companyWebsite'
          id='companyWebsite'
          placeholder='Enter company website'
          value={formData.companyWebsite}
          onChange={handleChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Company's size</label>
        <input
          type='number'
          name='companySize'
          id='companySize'
          placeholder='Enter number of employees'
          value={formData.companySize}
          onChange={handleChange}
          required
        />
      </StepInputWrapper>

      <CustomBtn type='submit'>Proceed</CustomBtn>
    </StepFormContainer>
  )
}

export default StepCompanyForm
