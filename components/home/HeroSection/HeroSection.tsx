import React from 'react'
import Image from 'next/image'
import { heroData } from 'data/home/heroData'
import AboutUsBtn from 'components/global/buttons/AboutUsBtn'

import {
  HeroMainSection,
  HeroContainer,
  HeroText,
  HeroContainerText,
} from './HeroSectionStyles'
import SignUpBtn from 'components/global/buttons/SignUpBtn'

type HeroSectionProps = typeof heroData

const HeroSection = ({
  primaryHeading,
  heroText,
  heroImage,
}: HeroSectionProps) => {
  return (
    <HeroMainSection>
      <HeroContainer>
        <HeroContainerText>
          <h1>{primaryHeading}</h1>
          <HeroText>{heroText}</HeroText>

          <SignUpBtn />
        </HeroContainerText>
        <div>
          <Image src={heroImage} alt='man searches for job' />
        </div>
      </HeroContainer>
    </HeroMainSection>
  )
}

export default HeroSection
