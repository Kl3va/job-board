import React from 'react'
import FindJobLayout from 'components/find-job/FindJobLayout/FindJobLayout'
import AccountSettingsTemplate from 'components/find-job/AccountSettings/AccountSettingsTemplate'

type Props = {}

const AccountSettingsPage = (props: Props) => {
  return (
    <FindJobLayout>
      <AccountSettingsTemplate />
    </FindJobLayout>
  )
}

export default AccountSettingsPage
