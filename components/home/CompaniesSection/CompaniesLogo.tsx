import React, { useRef } from 'react'
import Image from 'next/image'
import { logosCompany } from 'data/home/heroData'
import { useScroll, motion } from 'framer-motion'

import {
  LogoSection,
  LogosAnimationWrapper,
  LogosContainer,
} from './CompaniesLogoStyles'

type Props = {}

const CompaniesLogo = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  return (
    <LogoSection>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
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
      </motion.div>
    </LogoSection>
  )
}

export default CompaniesLogo
