///PROFILE CREATION AND UPDATE TYPES

export interface CreateEmployerProfileTypes {
  aboutCompany: string
  companyAddress: string
  companyWebsite: string
  companySize: number | string
}

export interface EmployerProfileCreationResponse {
  status: string
  data: {
    employer: {
      _id: string
      companyName: string
      accountUserId: {
        _id: string
        email: string
        userType: string
        createdAt: string
        updatedAt: string
      }
      companyRepresentative: string
      createdAt: string
      updatedAt: string
      __v: number
      companyAddress: string
      companySize: number
      companyWebsite: string
    }
  }
}

//////JOB-SEEKER
export interface JobSeekerProfileTypes {
  phoneNumber: string
  bio: string
  dateOfBirth: string
  gender: string
  location: string
  education: string
  currentPosition: string
  experience: string
  skills: string
  yearsOfExperience: number
  cvUrl: string
}

export interface JobSeekerProfileResponse {
  status: string
  data: {
    jobSeeker: {
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
      __v: number
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
  }
}
