import React, { useRef } from 'react'
import { aboutData } from 'data/home/aboutData'
import Image from 'next/image'
import { useTransform, useScroll, motion } from 'framer-motion'

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
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.9 1'],
  })

  const translateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ['4rem', '0rem']
  )

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <AboutMainSection>
      <motion.div
        ref={ref}
        style={{
          opacity: opacityProgress,
          y: translateProgress,
        }}
      >
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
      </motion.div>
    </AboutMainSection>
  )
}

export default AboutSection
