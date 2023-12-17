import React, { useState } from 'react'
import Link from 'next/link'

//Data
import { tabsData } from 'data/find-job/settingsHeaderData'

//Components
import ProfileSettingsTemplate from './Children/ProfileSettings/ProfileSettingsTemplate'
import SecuritySettingsTemplate from './Children/SecuritySettings/SecuritySettingsTemplate'

//Styled-components
import {
  AccountSettingsContainer,
  AccountSettingsHeader,
  AccountSettingsSection,
  AccountSettingsTab,
  AccountSettingsTabsWrapper,
} from './AccountSettingsTemplateStyles'

type Props = {}

const AccountSettingsTemplate = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0)
  const [formTabs, setFormTabs] = useState([
    <ProfileSettingsTemplate />,
    <SecuritySettingsTemplate />,
  ])

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <main>
      <AccountSettingsSection>
        <AccountSettingsContainer>
          <AccountSettingsHeader>
            <AccountSettingsTabsWrapper>
              {tabsData.tabsContent.map((tabs, index) => {
                return (
                  <AccountSettingsTab
                    key={index}
                    onClick={() => handleTabChange(index)}
                    isActive={index === activeTab}
                  >
                    {tabs}
                  </AccountSettingsTab>
                )
              })}
            </AccountSettingsTabsWrapper>
            <Link href={tabsData.preview_link.url}>
              {tabsData.preview_link.label}
            </Link>
          </AccountSettingsHeader>
          {formTabs[activeTab]}
        </AccountSettingsContainer>
      </AccountSettingsSection>
    </main>
  )
}

export default AccountSettingsTemplate
