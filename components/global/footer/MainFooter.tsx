import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menuData } from 'data/home/menuData'

import { HomeFooter } from './MainFooterStyles'
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
        <span>© 2023 JobHub All rights reserved.</span>
      </HomeFooter>
    </footer>
  )
}

export default MainFooter
