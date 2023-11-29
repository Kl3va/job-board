import React from 'react'
import ChangePassword from './Children/ChangePassword/ChangePassword'
import DeleteAccount from './Children/DeleteAccount/DeleteAccount'
import { ProfileSettingsContainer } from '../ProfileSettings/ProfileSettingsTemplate'

type Props = {}

const SecuritySettingsTemplate = (props: Props) => {
  return (
    <ProfileSettingsContainer>
      <ChangePassword />
      <DeleteAccount />
    </ProfileSettingsContainer>
  )
}

export default SecuritySettingsTemplate
