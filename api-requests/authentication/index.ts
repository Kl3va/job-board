import axios, { AxiosResponse } from 'axios'
///BASE URL
const baseUrl = 'https://job-board.fly.dev'

///DATA TYPES
import { CompanySignUpTypes } from 'components/forms/employer-signup/EmployerSignUpForm'
import { JobSeekerSignUpTypes } from 'components/forms/sign-up/SignUpForm'

//COMPANY OR EMPLOYER SIGN UP
export const EmployerSignUpRequest = async (userData: CompanySignUpTypes) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    const response: AxiosResponse<any> = await axios.post(
      `${baseUrl}/api/v1/auth/employer/sign-up/`,
      userData,
      { headers: headers }
    )
    return response.data // Return the data received from the server
  } catch (error: any) {
    return error.response?.data?.message || 'Failed' // Handle errors
  }
}

///JOB SEEKER SIGNUP
export const JobSeekerSignUpRequest = async (
  userData: JobSeekerSignUpTypes
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    const response: AxiosResponse<any> = await axios.post(
      `${baseUrl}/api/v1/auth/job-seeker/sign-up/`,
      userData,
      { headers: headers }
    )
    return response.data // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to sign up') // Handle errors
  }
}

////COMPANY OR JOBSEEKER LOGIN
export const SignInRequest = async (userData: {
  email: string
  password: string
}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    const response: AxiosResponse<any> = await axios.post(
      `${baseUrl}/api/v1/auth/sign-in/`,
      userData,
      { headers: headers }
    )
    return response.data // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to Log in') // Handle errors
  }
}
