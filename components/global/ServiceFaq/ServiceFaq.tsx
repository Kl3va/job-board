import React, { SyntheticEvent, useState, useEffect } from 'react'
import {
  FaqContainer,
  FaqWrap,
  FaqItem,
  FaqHeader,
  FaqBody,
  FaqMainHeader,
  FaqSection,
} from 'components/global/ServiceFaq/ServiceFaqStyles'
import { faqToggleVariant } from 'styles/animations/variants/faqToggleVariant'
import { AnimatePresence } from 'framer-motion'
import { faqData } from 'data/home/faq'

const ServiceFaq = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<null | number>(null)

  const handleFaqToggle = (e: SyntheticEvent, index: number) => {
    if (activeFaqIndex !== index) {
      setActiveFaqIndex(index)
    } else {
      setActiveFaqIndex(null)
    }
  }

  return (
    <FaqSection>
      <FaqContainer>
        <FaqMainHeader>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the product and billing</p>
        </FaqMainHeader>
        <FaqWrap>
          {faqData.map((faq, index) => {
            return (
              <FaqItem key={faq.id}>
                <FaqHeader onClick={(e) => handleFaqToggle(e, index)}>
                  <div>
                    <h3>{faq.header}</h3>
                  </div>
                  <div>
                    <span>
                      {activeFaqIndex === index ? (
                        <i className='fa-regular fa-circle-minus'></i>
                      ) : (
                        <i className='fa-regular fa-circle-plus'></i>
                      )}
                    </span>
                  </div>
                </FaqHeader>
                <AnimatePresence>
                  <FaqBody
                    faqToggle={activeFaqIndex === index}
                    variants={faqToggleVariant()}
                    initial={activeFaqIndex === index ? 'hidden' : 'initial'}
                    animate={activeFaqIndex === index ? 'show' : 'hidden'}
                    exit={{
                      height: '0px',
                      transition: {
                        type: 'spring',
                        duration: 1,
                        bounce: 0.3,
                      },
                    }}
                  >
                    <p>{faq.body}</p>
                  </FaqBody>
                </AnimatePresence>
              </FaqItem>
            )
          })}
        </FaqWrap>
      </FaqContainer>
    </FaqSection>
  )
}

export default ServiceFaq
