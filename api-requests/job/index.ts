import axios, { AxiosResponse } from 'axios'
///BASE URL
const baseUrl = 'https://job-board.fly.dev'

//interface
import {
  JobPostingTypes,
  JobDetailsResponse,
  JobListResponse,
  JobApplicationResponse,
  SavedJobApplicationDetails,
  JobApplicationListResponse,
  UnsavedJobApiResponse,
} from 'types/jobTypes'

/////////////JOB API REQUESTS
//Create Job
export const CreateJobRequest = async (
  userData: JobPostingTypes,
  token: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.post<JobDetailsResponse>(
      `${baseUrl}/api/v1/jobs/create-job/`,
      userData,
      { headers: headers }
    )
    return response.data.data.job // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create job') // Handle errors
  }
}

///Update Job
export const UpdateJobRequest = async (
  userData: JobPostingTypes,
  token: string,
  jobID: string
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.patch<JobDetailsResponse>(
      `${baseUrl}/api/v1/jobs/update-job/${jobID}`,
      userData,
      { headers: headers }
    )
    return response.data.data.job // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update job') // Handle errors
  }
}

///Get Job
export const GetJobRequest = async (token: string, jobID: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.get<JobDetailsResponse>(
      `${baseUrl}/api/v1/jobs/get-jobs/${jobID}`,
      { headers: headers }
    )
    return response.data.data.job // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get job') // Handle errors
  }
}

/////GET JOBS BY SEEKER
export const GetJobBySeekerRequest = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.get<JobListResponse>(
      `${baseUrl}/api/v1/jobs/get-jobs/`,
      { headers: headers }
    )
    return response.data.data.jobs // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get jobs') // Handle errors
  }
}

////EMPLOYER JOBS
export const GetJobByEmployerRequest = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response: AxiosResponse<any> = await axios.get(
      `${baseUrl}/api/v1/jobs/get-jobs-by-employer/`,
      { headers: headers }
    )
    return response.data.data.jobs // Return the data received from the server
    // return response.data // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get jobs') // Handle errors
  }
}

//////APPLY-TO-JOB
export const ApplyToJobRequest = async (token: string, jobID: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.post<JobApplicationResponse>(
      `${baseUrl}/api/v1/jobs/apply-to-job/${jobID}`,
      { headers: headers }
    )
    return response.data.data.job // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to apply to job') // Handle errors
  }
}

///Saved Job
export const SavedJobRequest = async (token: string, jobID: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.post<UnsavedJobApiResponse>(
      `${baseUrl}/api/v1/jobs/save-job/${jobID}`,
      { headers: headers }
    )
    return response.data.data.job // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to save job') // Handle errors
  }
}

//Unsave Job
export const UnSavedJobRequest = async (token: string, jobID: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response: AxiosResponse<any> = await axios.post(
      `${baseUrl}/api/v1/jobs/unsave-job/${jobID}`,
      { headers: headers }
    )
    return response.data.data.job // Return the data received from the server
  } catch (error: any) {
    // throw new Error(error.response?.data?.message || 'Failed to unsave job') // Handle errors
    throw new Error(error.message)
  }
}

///Get all saved jobs
export const AllSavedJobRequest = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.get<JobApplicationListResponse>(
      `${baseUrl}/api/v1/jobs/get-saved-jobs/`,
      { headers: headers }
    )
    return response.data.data.jobs // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to unsave job') // Handle errors
  }
}

///Get all applied jobs
export const AllAppliedJobsRequest = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.get<JobApplicationListResponse>(
      `${baseUrl}/api/v1/jobs/get-applied-jobs/`,
      { headers: headers }
    )
    return response.data.data.jobs // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get jobs') // Handle errors
  }
}

//Delete Job(Can only be done by employer)
export const DeleteJobRequest = async (token: string, jobID: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const response: AxiosResponse<any> = await axios.delete(
      `${baseUrl}/api/v1/jobs/delete-job/${jobID}`,
      { headers: headers }
    )
    return response.data // Return the data received from the server
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete job') // Handle errors
  }
}
