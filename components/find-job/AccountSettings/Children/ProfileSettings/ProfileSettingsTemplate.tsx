import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PersonalInformationSettings from './Children/PersonalInformationSettings/PersonalInformationSettings'
import ProfessionalInformationSettings from './Children/ProfessionalInformationSettings/ProfessionalInformationSettings'

//Types
import {
  StepOneData,
  PersonalformDatatypes,
} from 'components/find-job/PersonalProfile/PersonalProfileTemplate'

export const ProfileSettingsContainer = styled.div`
  display: grid;
  gap: 2rem;
`

type Props = {}

const ProfileSettingsTemplate = (props: Props) => {
  const [formData, setFormData] = useState<PersonalformDatatypes>({
    phoneNumber: '',
    bio: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    education: '',
    currentPosition: '',
    experience: '',
    skills: '',
    yearsOfExperience: '',
    cvUrl: '',
  })

  //Update the form Data
  const updateFormData = (dataToUpdate: StepOneData) => {
    setFormData({ ...formData, ...dataToUpdate })
  }

  return (
    <ProfileSettingsContainer>
      <PersonalInformationSettings updateFormData={updateFormData} />
      <ProfessionalInformationSettings formData={formData} />
    </ProfileSettingsContainer>
  )
}

export default ProfileSettingsTemplate
