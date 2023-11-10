import React from 'react'
import { aboutData } from 'data/home/aboutData'
import Image from 'next/image'

type AboutSectionProps = typeof aboutData

const AboutSection = ({
  aboutHeading,
  aboutText,
  services,
}: AboutSectionProps) => {
  return (
    <section>
      <div>
        <p>{aboutText}</p>
        <h2>{aboutHeading}</h2>
        <div>
          {services.map((service, index) => {
            return (
              <div key={index}>
                <Image src={service.icon} alt='icon' />
                <h3>{service.subHeading}</h3>
                <p>{service.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
