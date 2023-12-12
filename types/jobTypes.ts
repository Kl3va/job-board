import { StaticImageData } from 'next/image'

export interface JobDataTypes {
  id: number
  job_picture: StaticImageData
  dot_icon: StaticImageData
  job_role: string
  company: string
  location: string
  job_description: string
  date: string
  job_type: string
  salary_range: string
  experience_level: string
  job_method: string
  action_save: {
    icon: string
    label: string
  }
  action_share: {
    icon: string
    label: string
  }
  action_copy: { icon: string; label: string }
}

///Create Job data types
export interface JobPostingTypes {
  jobRole: string
  jobSummary: string
  employmentType: string
  experienceLevel: string
  workType: string
  pay: number | string
  responsibilities: string
  jobRequirements: string[]
  coreSkills: string[]
  softSkills: string[]
  closingDate: string
  openPositions: number | string
}

//Single job types
export interface SingleJobTypes {
  employerId: string
  jobRole: string
  jobSummary: string
  employmentType: string
  workType: string
  pay: number
  experienceLevel: string
  responsibilities: string
  jobRequirements: string[]
  coreSkills: string[]
  softSkills: string[]
  closingDate: string
  openPositions: number
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

///Create Job Types
export interface JobDetailsResponse {
  status: string
  data: {
    job: SingleJobTypes
  }
}

/// ALL JOBS
export interface JobListResponse {
  status: string
  data: {
    jobs: SingleJobTypes[]
  }
}

////APPLY TO JOB
export interface JobApplicationResponse {
  status: string
  data: {
    job: {
      jobSeekerId: string
      jobId: string
      applied: boolean
      saved: boolean
      _id: string
      createdAt: string
      updatedAt: string
      __v: number
    }
  }
}

///Saved Job types

interface JobApplicationTypes {
  _id: string
  jobSeekerId: {
    _id: string
    accountUserId: {
      _id: string
      email: string
      userType: string
      createdAt: string
      updatedAt: string
    }
    fullName: string
    createdAt: string
    updatedAt: string
    bio: string
    currentPosition: string
    cvUrl: string
    dateOfBirth: string
    education: string
    experience: string
    gender: string
    location: string
    phoneNumber: string
    skills: string
    yearsOfExperience: number
  }
  jobId: {
    _id: string | null
    employerId?: string
    jobRole?: string
    jobSummary?: string
    employmentType?: string
    workType?: string
    pay?: number
    experienceLevel?: string
    responsibilities?: string
    jobRequirements?: string[]
    coreSkills?: string[]
    softSkills?: string[]
    closingDate?: string
    openPositions?: number
    createdAt?: string
    updatedAt?: string
  }
  applied: boolean
  saved: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export interface SavedJobApplicationDetails {
  status: string
  data: {
    job: JobApplicationTypes
  }
}

//Get All saved jobs types or applied jobs
export interface JobApplicationListResponse {
  status: string
  data: {
    jobs: JobApplicationTypes[]
  }
}
