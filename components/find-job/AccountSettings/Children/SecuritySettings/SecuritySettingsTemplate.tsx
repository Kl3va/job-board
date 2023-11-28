import React from 'react'
import ChangePassword from './Children/ChangePassword/ChangePassword'
import DeleteAccount from './Children/DeleteAccount/DeleteAccount'

type Props = {}

const SecuritySettingsTemplate = (props: Props) => {
  return (
    <div>
      <ChangePassword />
      <DeleteAccount />
    </div>
  )
}

export default SecuritySettingsTemplate
