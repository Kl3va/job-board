import React from 'react'
import styled, { css } from 'styled-components'
import PersonalInformationSettings from './Children/PersonalInformationSettings/PersonalInformationSettings'
import ProfessionalInformationSettings from './Children/ProfessionalInformationSettings/ProfessionalInformationSettings'

export const ProfileSettingsContainer = styled.div`
  display: grid;
  gap: 2rem;
`

type Props = {}

const ProfileSettingsTemplate = (props: Props) => {
  return (
    <ProfileSettingsContainer>
      <PersonalInformationSettings />
      <ProfessionalInformationSettings />
    </ProfileSettingsContainer>
  )
}

export default ProfileSettingsTemplate
