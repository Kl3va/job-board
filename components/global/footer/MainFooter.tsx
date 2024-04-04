import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menuData } from 'data/home/menuData'

import { HomeFooter, ContactContainer } from './MainFooterStyles'
import { HeaderLogoContainer } from '../header/HeaderStyles'

type Props = {}

const MainFooter = (props: Props) => {
  const { logo } = menuData

  const currentYear = new Date().getFullYear()

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
          <span>{`©${currentYear} WorkNest All rights reserved.`}</span>
          <span>support@work-nest.vercel.app</span>
        </ContactContainer>
      </HomeFooter>
    </footer>
  )
}

export default MainFooter
