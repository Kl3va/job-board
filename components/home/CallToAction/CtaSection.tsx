import React from 'react'
import { CtaMainSection, CtaContainer } from './CtaSectionStyles'
import SignUpBtn from 'components/global/buttons/SignUpBtn'

const CTASection = () => {
  return (
    <CtaMainSection>
      <CtaContainer>
        <h2> Let's make the connection that counts!</h2>
        <p>
          Join Us today and unlock endless possibilities for your career or your
          organization's growth.
        </p>
        <SignUpBtn/>
      </CtaContainer>
    </CtaMainSection>
  )
}

export default CTASection
