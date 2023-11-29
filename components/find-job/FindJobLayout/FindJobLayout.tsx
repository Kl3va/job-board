import React from 'react'
import { ReactNode } from 'react'
import FindJobHeader from '../FindJobHeader/FindJobHeader'
import { findJobNavData } from 'data/find-job/headerNavData'

interface FindJobLayoutProps {
  children: ReactNode
}

const FindJobLayout = ({ children }: FindJobLayoutProps) => {
  return (
    <>
      <FindJobHeader {...findJobNavData} />
      {children}
    </>
  )
}

export default FindJobLayout
