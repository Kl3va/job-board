import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import CustomLinkBtn from 'components/global/buttons/CustomLinkBtn'
import SignUpBtn from '../buttons/SignUpBtn'

import {
  HeaderContainer,
  HeaderInner,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavList,
  MobileNav,
  MenuList,
  HeaderBtnsContainer,
  SubMenu,
} from './HeaderStyles'
import type { HeaderDataTypes } from 'types/menuTypes'
import { mobileNavVariant } from 'styles/animations/variants/mobileNavVariant'
import { useBreakPointUp } from 'hooks/useBreakPoint'

interface HeaderTypes {
  data: HeaderDataTypes
}

const Header = ({ data }: HeaderTypes) => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false)

  const { menu, logo } = data
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    if (mobileNavToggle) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [mobileNavToggle])

  const { breakPoint: switchNavWidth } = useBreakPointUp({
    breakMark: 576,
  })

  const { breakPoint: showNavMenu } = useBreakPointUp({
    breakMark: 800,
  })

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogoContainer>
          <Link href={logo.link}>
            <span>
              <Image src={logo.image} alt='logo' />
              {logo.title}
            </span>
          </Link>
        </HeaderLogoContainer>
        <HeaderNav>
          <MobileNav>
            <button onClick={() => setMobileNavToggle(!mobileNavToggle)}>
              {mobileNavToggle ? (
                <i className='fa-solid fa-xmark'></i>
              ) : (
                <i className='fa-solid fa-bars'></i>
              )}
            </button>
          </MobileNav>

          <AnimatePresence>
            <HeaderNavList
              mobileNavToggle={mobileNavToggle}
              onClick={() => setMobileNavToggle(false)}
              variants={mobileNavVariant(switchNavWidth ? '70vw' : '100vw')}
              initial='hidden'
              animate={showNavMenu || mobileNavToggle ? 'show' : 'hidden'}
              exit='exit'
            >
              {menu.map((item) => {
                // const activeLink: boolean = item.link === 'create'
                return (
                  <MenuList
                    key={item.id}
                    isActive={pathname === item.link}
                    specialTitle={item.title}
                  >
                    <div className='list_container'>
                      <Link href={item.link}>{item.title}</Link>
                    </div>
                  </MenuList>
                )
              })}
              <HeaderBtnsContainer>
                <CustomLinkBtn href='/login' text='Log In' />
                <SignUpBtn />
              </HeaderBtnsContainer>
            </HeaderNavList>
          </AnimatePresence>
        </HeaderNav>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header
