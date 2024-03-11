import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { CtaMainSection, CtaContainer } from './CtaSectionStyles'
import SignUpBtn from 'components/global/buttons/SignUpBtn'

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1'],
  })

  return (
    <CtaMainSection>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <CtaContainer>
          <h2> Let's make the connection that counts!</h2>
          <p>
            Join Us today and unlock endless possibilities for your career or
            your organization's growth.
          </p>
          <SignUpBtn />
        </CtaContainer>
      </motion.div>
    </CtaMainSection>
  )
}

export default CTASection
