import React from 'react'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'
import { CtaMainSection, CtaContainer } from './CtaSectionStyles'

const CTASection = () => {
  return (
    <CtaMainSection>
      <CtaContainer>
        <h2> Let's make the connection that counts!</h2>
        <p>
          Join Us today and unlock endless possibilities for your career or your
          organization's growth.
        </p>
        <CustomLinkBtn
          href='/sign-up'
          text='Sign Up'
          bgColor='var(--color-accent-100)'
          textColor='var(--color-bg-100)'
        />
      </CtaContainer>
    </CtaMainSection>
  )
}

export default CTASection
