import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menuData } from 'data/home/menuData'

import { HomeFooter, ContactContainer } from './MainFooterStyles'
import { HeaderLogoContainer } from '../header/HeaderStyles'

type Props = {}

const MainFooter = (props: Props) => {
  const { logo } = menuData

  return (
    <footer>
      <HomeFooter>
        <HeaderLogoContainer>
          <Link href={logo.link}>
            <span>
              <Image src={logo.image} alt='logo' />
              {logo.title}
            </span>
          </Link>
        </HeaderLogoContainer>
        <ContactContainer>
          <span>© 2023 WorkNest All rights reserved.</span>
          <span>support@worknest.vercel.app</span>
        </ContactContainer>
      </HomeFooter>
    </footer>
  )
}

export default MainFooter
