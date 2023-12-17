import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuthProvider'
import { AnimatePresence } from 'framer-motion'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'
import { UpdateJobSeekerProfileRequest } from 'api-requests/account-user'
import { useCloudinaryUpload } from 'hooks/useCloudinaryUpload'
import { PersonalformDatatypes } from 'components/find-job/PersonalProfile/PersonalProfileTemplate'

import { CustomBtn } from 'styles/globalStyles'

//Reusable Styled-components
import {
  PersonalInfoSettingsBtnWrapper,
  PersonalInfoSettingsContainer,
  PersonalInfoSettingsForm,
  PersonalInfoSettingsHeader,
} from '../PersonalInformationSettings/PersonalInformationSettingsStyles'
import { PdfWrapper } from 'components/find-job/PersonalProfile/Step/StepTwoP/StepTwoPStyles'

import { StepInputWrapper } from 'components/find-job/PersonalProfile/Step/StepOneP/StepOnePStyles'
import {
  ImageUploadWrapper,
  UploaderContent,
} from 'components/find-job/PersonalProfile/Step/StepTwoP/StepTwoPStyles'

interface Props {
  formData: PersonalformDatatypes
}

const ProfessionalInformationSettings = ({ formData }: Props) => {
  const router = useRouter()
  const { showAlert, resetUser } = useAuth()
  const [toggleForm, setToggleForm] = useState(false)
  const [ProfessionaInfoFormData, setProfessionalInfoFormData] = useState({
    education: '',
    currentPosition: '',
    experience: '',
    skills: '',
    yearsOfExperience: '',
    cvUrl: '',
  })
  const {
    selectedFile,
    fileInputRef,
    handleFileChange,
    handleButtonClick,
    setSelectedFile,
  } = useCloudinaryUpload()

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setProfessionalInfoFormData({
      ...ProfessionaInfoFormData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Exclude location field before sending data to API
    const token = localStorage.getItem('userToken')

    if (
      ProfessionaInfoFormData.currentPosition &&
      selectedFile &&
      ProfessionaInfoFormData.education &&
      ProfessionaInfoFormData.experience &&
      ProfessionaInfoFormData.skills &&
      !Number.isNaN(Number(ProfessionaInfoFormData.yearsOfExperience)) &&
      token !== null
    ) {
      try {
        //construct api data to be sent
        const dataToSend = {
          ...formData,
          currentPosition: ProfessionaInfoFormData.currentPosition,
          education: ProfessionaInfoFormData.education,
          experience: ProfessionaInfoFormData.experience,
          skills: ProfessionaInfoFormData.skills,
          yearsOfExperience: Number(ProfessionaInfoFormData.yearsOfExperience),
          cvUrl: selectedFile,
        }

        // Send dataToSend to your API
        const data = await UpdateJobSeekerProfileRequest(dataToSend, token)
        resetUser(data)
        //console.log(dataToSend)
        showAlert(true, 'Profile Updated!', 'success')
        setProfessionalInfoFormData({
          education: '',
          currentPosition: '',
          experience: '',
          skills: '',
          yearsOfExperience: '',
          cvUrl: '',
        })
        handleFormToggle()

        //Redirect on successful submission
        router.push('/apply-for-job/home')
      } catch (error: any) {
        showAlert(true, error.message, 'failure')
        // console.log(error.message)
      }
    }
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setProfessionalInfoFormData({
      education: '',
      currentPosition: '',
      experience: '',
      skills: '',
      yearsOfExperience: '',
      cvUrl: '',
    })
  }

  const handleFormToggle = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <PersonalInfoSettingsContainer>
      <PersonalInfoSettingsHeader onClick={() => handleFormToggle()}>
        <h2>Professional Information</h2>
        {toggleForm ? (
          <span>
            <i className='fa-regular fa-chevron-down'></i>
          </span>
        ) : (
          <span>
            <i className='fa-regular fa-chevron-up'></i>
          </span>
        )}
      </PersonalInfoSettingsHeader>
      <AnimatePresence>
        <PersonalInfoSettingsForm
          onSubmit={handleSubmit}
          formToggle={!toggleForm}
          variants={faqToggleVariant()}
          initial={!toggleForm ? 'hidden' : 'initial'}
          animate={!toggleForm ? 'show' : 'hidden'}
          exit={{
            height: '0px',
            transition: {
              type: 'spring',
              duration: 1,
              bounce: 0.3,
            },
          }}
        >
          <StepInputWrapper>
            <label>Role</label>
            <input
              type='text'
              name='currentPosition'
              id='currentPosition'
              placeholder='Enter your current position'
              value={ProfessionaInfoFormData.currentPosition}
              onChange={handleInputChange}
              required
            />
          </StepInputWrapper>

          <StepInputWrapper>
            <label>Years of experience</label>
            <input
              type='number'
              name='yearsOfExperience'
              id='yearsOfExperience'
              placeholder='Enter a valid number'
              value={ProfessionaInfoFormData.yearsOfExperience}
              onChange={handleInputChange}
              required
            />
          </StepInputWrapper>

          <StepInputWrapper>
            <label>Experience</label>
            <textarea
              name='experience'
              id='experience'
              cols={20}
              rows={4}
              placeholder='Enter Experience(Please separate with line breaks)'
              value={ProfessionaInfoFormData.experience}
              onChange={handleInputChange}
              required
            ></textarea>
          </StepInputWrapper>

          <StepInputWrapper>
            <label>Education</label>
            <input
              type='text'
              name='education'
              id='education'
              placeholder='Enter your education info'
              value={ProfessionaInfoFormData.education}
              onChange={handleInputChange}
              required
            />
          </StepInputWrapper>

          <StepInputWrapper>
            <label>Skills</label>
            <input
              type='text'
              name='skills'
              id='skills'
              placeholder='Enter skills(seperate with commas)'
              value={ProfessionaInfoFormData.skills}
              onChange={handleInputChange}
              required
            />
          </StepInputWrapper>

          <StepInputWrapper>
            <label>Upload CV</label>
            {selectedFile && (
              <PdfWrapper>
                <span>
                  <i className='fa-regular fa-file'></i>
                </span>
                <div>
                  <h3>CV pdf</h3>
                  <p>100% uploaded</p>
                </div>
                <span onClick={() => setSelectedFile('')}>
                  <i className='fa-regular fa-trash-can'></i>
                </span>
              </PdfWrapper>
            )}
            <ImageUploadWrapper>
              <input
                type='file'
                ref={fileInputRef}
                accept='.pdf' // Specify to accept only PDF files
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              <UploaderContent onClick={handleButtonClick}>
                <span>
                  <i className='fa-regular fa-cloud-arrow-up'></i>
                </span>
                <p>
                  <span>Click to upload</span> or drag and drop
                  PDF(max.800x400px)
                </p>
              </UploaderContent>
            </ImageUploadWrapper>
          </StepInputWrapper>

          <PersonalInfoSettingsBtnWrapper>
            <CustomBtn
              type='submit'
              bgColor='var(--color-bg-100)'
              textColor='var(--color-font-400)'
              onClick={handleCancel}
            >
              Cancel
            </CustomBtn>
            <CustomBtn type='submit'>Save</CustomBtn>
          </PersonalInfoSettingsBtnWrapper>
        </PersonalInfoSettingsForm>
      </AnimatePresence>
    </PersonalInfoSettingsContainer>
  )
}

export default ProfessionalInformationSettings
