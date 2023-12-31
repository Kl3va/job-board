import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { postJobNavData } from 'data/post-job/postJobHeaderData'

//Styled-Components
import { HeaderLogoContainer } from 'components/global/header/HeaderStyles'
import { HeaderContainer } from 'components/global/header/HeaderStyles'
// import {
//   JobHeaderInner,
//   JobHeaderNav,
//   JobHeaderLists,
//   JobHeaderLink,
//   JobHeaderProfile,
//   JobHeaderSearchWrapper,
//   JobSearchIconWrapper,
//   JobSearchInputSearch,
// } from './FindJobHeaderStyles'

import {
  JobHeaderInner,
  JobHeaderNav,
  JobHeaderLink,
  JobHeaderLists,
  JobHeaderProfile,
  JobHeaderSearchWrapper,
} from 'components/find-job/FindJobHeader/FindJobHeaderStyles'

type PostJobNavProps = typeof postJobNavData

const PostJobHeader = ({ logo, navLinks, profile }: PostJobNavProps) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <HeaderContainer>
      <JobHeaderInner>
        <HeaderLogoContainer>
          <Link href={logo.link}>
            <span>
              <Image src={logo.image} alt='logo' />
              {logo.title}
            </span>
          </Link>
        </HeaderLogoContainer>

        <JobHeaderNav>
          <JobHeaderLists>
            {navLinks.map((link, index) => {
              return (
                <JobHeaderLink
                  key={index}
                  isActive={pathname.startsWith(link.url)}
                >
                  <Link href={link.url}>{link.title}</Link>
                </JobHeaderLink>
              )
            })}
          </JobHeaderLists>
        </JobHeaderNav>
        <JobHeaderSearchWrapper>
          {/* <JobSearchIconWrapper>
            <JobSearchInputSearch
              type='search'
              name=''
              id=''
              placeholder='Search by job-role'
            />
            <i className='fa-solid fa-magnifying-glass'></i>
          </JobSearchIconWrapper> */}
          <JobHeaderProfile>
            <Image src={profile.image} alt='profile-image' />
            <p>{profile.names}</p>
            <span>
              <i className='fa-solid fa-chevron-down'></i>
            </span>
          </JobHeaderProfile>
        </JobHeaderSearchWrapper>
      </JobHeaderInner>
    </HeaderContainer>
  )
}

export default PostJobHeader
