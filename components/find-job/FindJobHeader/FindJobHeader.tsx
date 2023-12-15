import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuthProvider'
import { findJobNavData } from 'data/find-job/headerNavData'

//Styled-Components
import { HeaderLogoContainer } from 'components/global/header/HeaderStyles'
import { HeaderContainer } from 'components/global/header/HeaderStyles'
import {
  JobHeaderInner,
  JobHeaderNav,
  JobHeaderLists,
  JobHeaderLink,
  JobHeaderProfile,
  JobHeaderSearchWrapper,
  JobSearchIconWrapper,
  JobSearchInputSearch,
} from './FindJobHeaderStyles'


type FindJobNavProps = typeof findJobNavData

const FindJobHeader = ({ logo, navLinks, profile }: FindJobNavProps) => {
  const router = useRouter()
  const { pathname } = router
  const { user, handleActivePopup } = useAuth()

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
          <JobSearchIconWrapper>
            <JobSearchInputSearch
              type='search'
              name=''
              id=''
              placeholder='Search by job-role'
            />
            <i className='fa-solid fa-magnifying-glass'></i>
          </JobSearchIconWrapper>
          <JobHeaderProfile onClick={() => handleActivePopup('jobseeker-menu')}>
            <Image src={profile.image} alt='profile-image' />
            {user?.accountUserId?.userType === 'jobseeker' &&
              'fullName' in user && <p>{user.fullName}</p>}
            <span>
              <i className='fa-solid fa-chevron-down'></i>
            </span>
            
          </JobHeaderProfile>
        </JobHeaderSearchWrapper>
      </JobHeaderInner>
    </HeaderContainer>
  )
}

export default FindJobHeader
