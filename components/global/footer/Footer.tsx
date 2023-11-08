import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FooterContainer,
  FooterInner,
  FooterCopyright,
  FooterSocialsContainer,
  FooterSocials,
  FooterNav,
  FooterLinks,
  FooterUniqueLink,
} from 'components/global/footer/FooterStyles'
import type { FooterDataTypes } from 'types/menuTypes'

interface FooterTypes {
  data: FooterDataTypes
}

const Footer = ({ data }: FooterTypes) => {
  const { copyright, footerLinks, socials } = data

  const router = useRouter()
  const { pathname } = router

  return (
    <FooterContainer>
      <FooterInner>
        <FooterCopyright>
          <Link href='/'>{copyright}</Link>
        </FooterCopyright>
        <FooterNav>
          <FooterLinks>
            {footerLinks.map((link) => {
              const isActive = pathname === link.link
              return (
                <FooterUniqueLink
                  key={link.id}
                  aria-label={link.title}
                  isActive={isActive}
                >
                  <Link href={link.link}>{link.title}</Link>
                </FooterUniqueLink>
              )
            })}
          </FooterLinks>
        </FooterNav>
        <FooterSocialsContainer>
          <FooterSocials>
            {socials.map((social) => {
              return (
                <li key={social.id} aria-label={social.title}>
                  <div>
                    <Link href={social.link} passHref>
                      <a target='_blank' rel='noopener noreferrer'>
                        <i className={social.icon}></i>
                      </a>
                    </Link>
                  </div>
                </li>
              )
            })}
          </FooterSocials>
        </FooterSocialsContainer>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer
