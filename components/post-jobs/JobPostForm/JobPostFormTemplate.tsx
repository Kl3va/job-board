import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { CreateJobRequest } from 'api-requests/job'
import { CustomBtn } from 'styles/globalStyles'
import { useAuth } from 'hooks/useAuthProvider'

//Reusable styled-components
import { StepInputWrapper } from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'
import {
  PersonalInfoSettingsSelectWrapper,
  PersonalInfoSettingsBtnWrapper,
} from 'components/find-job/AccountSettings/Children/ProfileSettings/Children/PersonalInformationSettings/PersonalInformationSettingsStyles'

//Component-based styled-component
import {
  JobPostFormContainer,
  JobPostFormHeader,
  JobPostMainFormContainer,
  JobPostFormInputs,
} from './JobPostFormTemplateStyles'

type Props = {}

const JobPostFormTemplate = (props: Props) => {
  const router = useRouter()
  const { showAlert } = useAuth()
  const initialData = {
    jobRole: '',
    jobSummary: '',
    employmentType: 'full-time',
    experienceLevel: 'intern',
    workType: 'onsite',
    pay: '',
    responsibilities: '',
    jobRequirements: '',
    coreSkills: '',
    softSkills: '',
    closingDate: '',
    openPositions: '',
  }

  const [formData, setFormData] = useState(initialData)

  // Update form data on field changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //Prevent default form behaviour
    e.preventDefault()
    // Exclude location field before sending data to API
    const { jobRequirements, coreSkills, softSkills } = formData

    // Handle the textarea inputs as an array of strings
    const jobReqArray = jobRequirements
      .split('\n')
      .filter((text) => text.trim() !== '')
    const coreSkillsArray = coreSkills
      .split('\n')
      .filter((text) => text.trim() !== '')
    const softSkillsArray = softSkills
      .split('\n')
      .filter((text) => text.trim() !== '')

    const token = localStorage.getItem('userToken')

    if (
      formData.jobRequirements &&
      formData.employmentType &&
      formData.experienceLevel &&
      formData.coreSkills &&
      formData.jobRole &&
      formData.jobSummary &&
      formData.closingDate &&
      formData.responsibilities &&
      formData.softSkills &&
      formData.workType &&
      !Number.isNaN(Number(formData.pay)) &&
      !Number.isNaN(Number(formData.openPositions)) &&
      token !== null
    ) {
      try {
        // Creating an object with the split arrays and the rest of the form data
        const dataToSend = {
          ...formData,
          jobRequirements: jobReqArray,
          coreSkills: coreSkillsArray,
          softSkills: softSkillsArray,
        }

        // Send dataToSend to your API
        const data = await CreateJobRequest(dataToSend, token)
        showAlert(true, 'Job Created', 'success')
        //Reset data state
        setFormData(initialData)
        //Redirect on successful submission
        router.push('/post-job/home')
      } catch (error: any) {
        showAlert(true, error.message, 'failure')
      }
    }
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFormData(initialData)
  }

  return (
    <main>
      <section>
        <JobPostFormContainer>
          <JobPostFormHeader>
            <a href=''>Preview Job Post</a>
          </JobPostFormHeader>
          <JobPostMainFormContainer>
            <h2>Job Post</h2>
            <JobPostFormInputs onSubmit={handleSubmit}>
              <StepInputWrapper>
                <label>What's the Job Role</label>
                <input
                  type='text'
                  name='jobRole'
                  id='jobRole'
                  placeholder='Enter Job role'
                  value={formData.jobRole}
                  onChange={handleChange}
                  required
                />
              </StepInputWrapper>
              <StepInputWrapper>
                <label>Give summary of role</label>
                <textarea
                  name='jobSummary'
                  id='jobSummary'
                  cols={20}
                  rows={4}
                  placeholder='Enter Role summary'
                  value={formData.jobSummary}
                  onChange={handleChange}
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>
              <PersonalInfoSettingsSelectWrapper>
                <StepInputWrapper>
                  <label>What is the employment type</label>
                  <select
                    name='employmentType'
                    id='employmentType'
                    value={formData.employmentType}
                    onChange={handleChange}
                    required
                  >
                    <option value='full-time'>Full-Time</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='contract'>Contract</option>
                    <option value='internship'>Internship</option>
                  </select>
                </StepInputWrapper>

                <StepInputWrapper>
                  <label>What is the Work Type?</label>
                  <select
                    name='workType'
                    id='workType'
                    value={formData.workType}
                    onChange={handleChange}
                    required
                  >
                    <option value='onsite'>On-site</option>
                    <option value='hybrid'>Hybrid</option>
                    <option value='remote'>Remote</option>
                  </select>
                </StepInputWrapper>
              </PersonalInfoSettingsSelectWrapper>
              <PersonalInfoSettingsSelectWrapper>
                <StepInputWrapper>
                  <label>What's the pay for this role</label>
                  <input
                    type='number'
                    name='pay'
                    id='pay'
                    placeholder='Enter valid number'
                    value={formData.pay}
                    onChange={handleChange}
                    required
                  />
                </StepInputWrapper>

                <StepInputWrapper>
                  <label>What is the experience level required</label>
                  <select
                    name='experienceLevel'
                    id='experienceLevel'
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value='intern'>Intern</option>
                    <option value='junior'>Entry/Junior Level</option>
                    <option value='intermediate'>Mid/Intermediate Level</option>
                    <option value='senior'>Advance/Senior Level</option>
                  </select>
                </StepInputWrapper>
              </PersonalInfoSettingsSelectWrapper>

              <StepInputWrapper>
                <label>Job description/Responsibilities</label>
                <textarea
                  name='responsibilities'
                  id='responsibilities'
                  cols={20}
                  rows={4}
                  placeholder='Enter Description'
                  value={formData.responsibilities}
                  onChange={handleChange}
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>Job Requirement</label>
                <textarea
                  name='jobRequirements'
                  id='jobRequirements'
                  cols={20}
                  rows={4}
                  placeholder='Enter Requirements(Please separate with line breaks)'
                  value={formData.jobRequirements}
                  onChange={handleChange}
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>Core Skills</label>
                <textarea
                  name='coreSkills'
                  id='coreSkills'
                  cols={20}
                  rows={4}
                  placeholder='Enter skills(Please separate with line breaks)'
                  value={formData.coreSkills}
                  onChange={handleChange}
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>Soft Skills</label>
                <textarea
                  name='softSkills'
                  id='softSkills'
                  cols={20}
                  rows={4}
                  placeholder='Enter skills(Please separate with line breaks)'
                  value={formData.softSkills}
                  onChange={handleChange}
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>What's the end date of job post?</label>
                <input
                  type='date'
                  name='closingDate'
                  id='closingDate'
                  placeholder='Enter closing date'
                  value={formData.closingDate}
                  onChange={handleChange}
                  required
                />
              </StepInputWrapper>

              <StepInputWrapper>
                <label>How many hires do you require?</label>
                <input
                  type='number'
                  name='openPositions'
                  id='openPositions'
                  placeholder='Enter required(valid) number'
                  value={formData.openPositions}
                  onChange={handleChange}
                  required
                />
              </StepInputWrapper>

              <PersonalInfoSettingsBtnWrapper>
                <CustomBtn
                  type='button'
                  bgColor='var(--color-bg-100)'
                  textColor='var(--color-font-400)'
                  onClick={handleCancel}
                >
                  Cancel
                </CustomBtn>
                <CustomBtn type='submit'>Save</CustomBtn>
              </PersonalInfoSettingsBtnWrapper>
            </JobPostFormInputs>
          </JobPostMainFormContainer>
        </JobPostFormContainer>
      </section>
    </main>
  )
}

export default JobPostFormTemplate
