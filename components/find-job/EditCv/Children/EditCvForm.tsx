import React from 'react'
import { CustomBtn } from 'styles/globalStyles'

//Reusable styled-component
import {
  MultiBtnsWrapper,
  ApplyNowContainer,
} from 'components/find-job/ApplyNow/Children/ApplyNowContentStyles'
import { StepInputWrapper } from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'

//Component based style
import { EditCvFormComponent } from './EditCvFormStyles'

type Props = {}

const EditCvForm = (props: Props) => {
  return (
    <ApplyNowContainer>
      <EditCvFormComponent>
        <StepInputWrapper>
          <label>Full name</label>
          <input
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Full Name'
            required
          />
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
          />
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Portfolio Link (optional)</label>
          <input
            type='text'
            name='porfolio'
            id='portfolio'
            placeholder='https://daveed.dev'
          />
        </StepInputWrapper>

        <StepInputWrapper>
          <label>LinkedIn Link (optional)</label>
          <input
            type='text'
            name='linkedIn'
            id='linkedIn'
            placeholder='https://linkedin.com/daveed'
          />
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Summary</label>
          <textarea
            name='summary'
            id='summary'
            cols={20}
            rows={4}
            placeholder='Enter Brief Summary'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Experience</label>
          <textarea
            name='experience'
            id='experience'
            cols={20}
            rows={4}
            placeholder='Enter Brief Experience'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Education</label>
          <textarea
            name='education'
            id='education'
            cols={20}
            rows={4}
            placeholder='Enter Brief Education'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <StepInputWrapper>
          <label>Skills</label>
          <textarea
            name='skills'
            id='skills'
            cols={20}
            rows={4}
            placeholder='Enter Brief Skills'
            required
          ></textarea>
          <p>275 characters left</p>
        </StepInputWrapper>

        <MultiBtnsWrapper>
          <CustomBtn
            type='submit'
            bgColor='var(--color-bg-100)'
            textColor='var(--color-font-400)'
          >
            Cancel
          </CustomBtn>
          <CustomBtn type='submit'>Save Changes</CustomBtn>
        </MultiBtnsWrapper>
      </EditCvFormComponent>
    </ApplyNowContainer>
  )
}

export default EditCvForm
