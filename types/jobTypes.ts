import { StaticImageData } from "next/image"

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