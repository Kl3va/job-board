import React from 'react'
import { aboutData } from 'data/home/aboutData'
import Image from 'next/image'

//Styling(Styled-components)
import {
  AboutMainSection,
  AboutContainer,
  AboutServices,
} from './AboutSectionStyles'

type AboutSectionProps = typeof aboutData

const AboutSection = ({
  aboutHeading,
  aboutText,
  services,
}: AboutSectionProps) => {
  return (
    <AboutMainSection>
      <AboutContainer>
        <h3>{aboutText}</h3>
        <h2>{aboutHeading}</h2>
        <AboutServices>
          {services.map((service, index) => {
            return (
              <div key={index}>
                <Image src={service.icon} alt='icon' />
                <h3>{service.subHeading}</h3>
                <p>{service.text}</p>
              </div>
            )
          })}
        </AboutServices>
      </AboutContainer>
    </AboutMainSection>
  )
}

export default AboutSection
