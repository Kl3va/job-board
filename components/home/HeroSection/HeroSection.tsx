import React from 'react'
import Image from 'next/image'
import { heroData } from 'data/home/heroData'
import AboutUsBtn from 'components/global/buttons/AboutUsBtn'

import {
  HeroMainSection,
  HeroContainer,
  HeroText,
  HeroBtnWrapper,
  HeroCompanyText,
  LogoContainer,
  LogosWrapper,
} from './HeroSectionStyles'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'
import SignUpBtn from 'components/global/buttons/SignUpBtn'

type HeroSectionProps = typeof heroData

const HeroSection = ({
  primaryHeading,
  heroText,
  companyText,
  companyLogos,
}: HeroSectionProps) => {
  return (
    <HeroMainSection>
      <HeroContainer>
        <AboutUsBtn />
        <h1>{primaryHeading}</h1>
        <HeroText>{heroText}</HeroText>
        <HeroBtnWrapper>
          <CustomLinkBtn
            href='/'
            text='Demo'
            icon='fa-regular fa-circle-play'
          />
          <SignUpBtn />
        </HeroBtnWrapper>
        <HeroCompanyText>{companyText}</HeroCompanyText>
        {/* <LogoContainer>
          <LogosWrapper>
            {companyLogos.map((logo, index) => {
              return (
                <div key={index}>
                  <Image src={logo} />
                </div>
              )
            })}
          </LogosWrapper>
        </LogoContainer> */}
      </HeroContainer>
    </HeroMainSection>
  )
}

export default HeroSection
