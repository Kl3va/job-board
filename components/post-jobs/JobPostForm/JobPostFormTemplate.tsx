import React from 'react'
import { CustomBtn } from 'styles/globalStyles'

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
  return (
    <main>
      <section>
        <JobPostFormContainer>
          <JobPostFormHeader>
            <a href=''>Preview Job Post</a>
          </JobPostFormHeader>
          <JobPostMainFormContainer>
            <h2>Job Post</h2>
            <JobPostFormInputs>
              <StepInputWrapper>
                <label>What's the Job Role</label>
                <input
                  type='text'
                  name='role'
                  id='role'
                  placeholder='Enter Job role'
                  required
                />
              </StepInputWrapper>
              <StepInputWrapper>
                <label>Give summary of role</label>
                <textarea
                  name='summary'
                  id='summary'
                  cols={20}
                  rows={4}
                  placeholder='Enter Role summary'
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>
              <PersonalInfoSettingsSelectWrapper>
                <StepInputWrapper>
                  <label>What is the employment type</label>
                  <select name='employment' id='employment'>
                    <option value='select'>Select Type</option>
                    <option value='full time'>Full-Time</option>
                    <option value='part time'>Part-Time</option>
                    <option value='contract'>Contract</option>
                    <option value='internship'>Internship</option>
                  </select>
                </StepInputWrapper>

                <StepInputWrapper>
                  <label>What is the Work Type?</label>
                  <select name='work' id='work'>
                    <option value='select'>Select Work-Type</option>
                    <option value='on site'>On-site</option>
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
                    placeholder='Enter renumeration'
                    required
                  />
                </StepInputWrapper>

                <StepInputWrapper>
                  <label>What is the experience level required</label>
                  <select name='level' id='level'>
                    <option value='select'>Select level</option>
                    <option value='intern'>Intern</option>
                    <option value='entry/junior level'>
                      Entry/Junior Level
                    </option>
                    <option value='mid/intermediate level'>
                      Mid/Intermediate Level
                    </option>
                    <option value='advance/senior level'>
                      Advance/Senior Level
                    </option>
                  </select>
                </StepInputWrapper>
              </PersonalInfoSettingsSelectWrapper>

              <StepInputWrapper>
                <label>Job description/Responsibilities</label>
                <textarea
                  name='description'
                  id='description'
                  cols={20}
                  rows={4}
                  placeholder='Enter Description'
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>Job Requirement</label>
                <textarea
                  name='description'
                  id='description'
                  cols={20}
                  rows={4}
                  placeholder='Enter Requirement'
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>Core Skills</label>
                <select name='core' id='core'>
                  <option value='select'>Select core-skills</option>
                  <option value='figma'>Figma</option>
                  <option value='adobe xd'>Adobe Xd</option>
                </select>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>Soft Skills</label>
                <textarea
                  name='skills'
                  id='skills'
                  cols={20}
                  rows={4}
                  placeholder='Enter required skills'
                  required
                ></textarea>
                <p>275 characters left</p>
              </StepInputWrapper>

              <StepInputWrapper>
                <label>What's the end date of job post?</label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  placeholder='Enter closing date'
                  required
                />
              </StepInputWrapper>

              <StepInputWrapper>
                <label>How many hires do you require?</label>
                <input
                  type='number'
                  name='hires'
                  id='hires'
                  placeholder='Enter required number'
                  required
                />
              </StepInputWrapper>

              <PersonalInfoSettingsBtnWrapper>
                <CustomBtn
                  type='submit'
                  bgColor='var(--color-bg-100)'
                  textColor='var(--color-font-400)'
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
