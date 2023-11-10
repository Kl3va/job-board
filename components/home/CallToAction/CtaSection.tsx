import React from 'react'
import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'

const CTASection = () => {
  return (
    <section>
      <div>
        <h2> Let's make the connection that counts!</h2>
        <p>
          Join Us today and unlock endless possibilities for your career or your
          organization's growth.
        </p>
        <CustomLinkBtn
          href='/create-account'
          text='Sign Up'
          bgColor='var(--color-accent-100)'
          textColor='var(--color-bg-100)'
        />
      </div>
    </section>
  )
}

export default CTASection
