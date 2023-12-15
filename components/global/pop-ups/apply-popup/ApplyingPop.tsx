import React, { useState } from 'react'
import { CustomBtn } from 'styles/globalStyles'
import { useAuth } from 'hooks/useAuthProvider'
import { useRouter } from 'next/router'

const data = ['Apply using JobHub profile', 'Apply using saved CV']

import {
  PopContainer,
  LayerIcon,
  OptionWrapper,
  BtnsWrap,
} from './ApplyingPopStyles'

type Props = {}

const ApplyingPop = (props: Props) => {
  const router = useRouter()
  const { activePopup, handleActivePopup, setcvOption, activeJobId } = useAuth()

  const handleOptionNav = () => {
    handleActivePopup(null)
    router.push(`/apply-for-job/home/${activeJobId}/apply-now`)
  }

  const [activeOption, setActiveOption] = useState(0)
  return (
    <PopContainer>
      <LayerIcon>
        <i className='fa-regular fa-layer-group'></i>
      </LayerIcon>
      <h3>Select CV option</h3>

      {data.map((option, index) => {
        return (
          <OptionWrapper
            key={index}
            onClick={() => setActiveOption(index)}
            active={activeOption === index}
          >
            <LayerIcon>
              <i className='fa-regular fa-layer-group'></i>
            </LayerIcon>
            <h4>{option}</h4>
            {activeOption === index && (
              <span>
                <i className='fa-solid fa-circle-check'></i>
              </span>
            )}
          </OptionWrapper>
        )
      })}

      <BtnsWrap>
        <CustomBtn
          type='button'
          bgColor='var(--color-bg-100)'
          textColor='var(--color-font-400)'
          onClick={() => handleActivePopup(null)}
        >
          Cancel
        </CustomBtn>
        <CustomBtn type='button' onClick={handleOptionNav}>
          Proceed
        </CustomBtn>
      </BtnsWrap>
    </PopContainer>
  )
}

export default ApplyingPop
