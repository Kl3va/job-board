import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menuData } from 'data/home/menuData'

type Props = {}

const MainFooter = (props: Props) => {
  const { logo } = menuData

  return (
    <footer>
      <div>
        <div>
          <Link href={logo.link}>
            <span>
              <Image src={logo.image} alt='logo' />
              {logo.title}
            </span>
          </Link>
        </div>
        <span>© 2023 JobHub All rights reserved.</span>
      </div>
    </footer>
  )
}

export default MainFooter
