import React from 'react'
import Image from 'next/image'
import { logosCompany } from 'data/home/heroData'

import {
  LogoSection,
  LogosAnimationWrapper,
  LogosContainer,
} from './CompaniesLogoStyles'

type Props = {}

const CompaniesLogo = (props: Props) => {
  return (
    <LogoSection>
      <LogosContainer>
        <h2>Few Companies that use WorkNest</h2>
        <LogosAnimationWrapper itemNumber={logosCompany.length}>
          {logosCompany.map((logo, index) => {
            return (
              <div key={index}>
                <Image src={logo} alt='company logo' />
              </div>
            )
          })}
        </LogosAnimationWrapper>
      </LogosContainer>
    </LogoSection>
  )
}

export default CompaniesLogo
