import axios, { AxiosResponse } from 'axios'
///BASE URL
const baseUrl = 'https://job-board.fly.dev'

//interface
import {
  CreateEmployerProfileTypes,
  EmployerProfileCreationResponse,
  JobSeekerProfileTypes,
  JobSeekerProfileResponse,
} from 'types/profileTypes'

////Create Employer Profile
export const CreateEmployerProfileRequest = async (
  userData: CreateEmployerProfileTypes,
  token: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response: AxiosResponse<any> = await axios.patch(
      `${baseUrl}/api/v1/account-users/employer/create-profile/`,
      userData,
      { headers: headers }
    )
    // return response.data.data.employer // Return the data received from the server
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create profile') // Handle errors
  }
}

////Get Employer Profile
export const GetEmployerProfileRequest = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.get<EmployerProfileCreationResponse>(
      `${baseUrl}/api/v1/account-users/employer/profile/`,
      { headers: headers }
    )
    return response.data.data.employer // Return the data received from the server
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to get user profile'
    ) // Handle errors
  }
}

////Update Employer Profile
export const UpdateEmployerProfileRequest = async (
  userData: CreateEmployerProfileTypes,
  token: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.patch<EmployerProfileCreationResponse>(
      `${baseUrl}/api/v1/account-users/employer/update-profile/`,
      userData,
      { headers: headers }
    )
    return response.data.data.employer // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update profile') // Handle errors
  }
}

//////////////JOB-SEEKER
////

export const CreateJobSeekerProfileRequest = async (
  userData: JobSeekerProfileTypes,
  token: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.patch<JobSeekerProfileResponse>(
      `${baseUrl}/api/v1/account-users/job-seeker/create-profile/`,
      userData,
      { headers: headers }
    )
    return response.data.data.jobSeeker // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create profile') // Handle errors
  }
}

////Get JobSeeker Profile
export const GetJobSeekerProfileRequest = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.patch<JobSeekerProfileResponse>(
      `${baseUrl}/api/v1/account-users/job-seeker/profile/`,
      { headers: headers }
    )
    return response.data.data.jobSeeker // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get profile') // Handle errors
  }
}

////Update Job seeker profile

export const UpdateJobSeekerProfileRequest = async (
  userData: JobSeekerProfileTypes,
  token: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.patch<JobSeekerProfileResponse>(
      `${baseUrl}/api/v1/account-users/job-seeker/update-profile/`,
      userData,
      { headers: headers }
    )
    return response.data.data.jobSeeker // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update profile') // Handle errors
  }
}
