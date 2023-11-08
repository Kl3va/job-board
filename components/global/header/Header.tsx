import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import {
  HeaderContainer,
  HeaderInner,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavList,
  MobileNav,
  ConnectBtn,
  MenuList,
  SubMenu,
} from './HeaderStyles'
import type { HeaderDataTypes } from 'types/menuTypes'
import { mobileNavVariant } from 'styles/animations/variants/mobileNavVariant'
import { useBreakPointUp } from 'hooks/useBreakPoint'
import { ClickAwayListener } from '@mui/material'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'

interface HeaderTypes {
  data: HeaderDataTypes
}

const Header = ({ data }: HeaderTypes) => {
  const {
    address,
    isConnected: walletIsConnected,
    isDisconnected: walletIsDisconnected,
    isReconnecting: walletIsReconnecting,
    isConnecting: walletIsConnecting,
  } = useAccount()

  const walletAddress = address

  const [mobileNavToggle, setMobileNavToggle] = useState(false)

  const [IsUserConnected, setIsUserConnectede] = useState(false)

  const { menu } = data
  const router = useRouter()
  const { pathname } = router

  const [connectToggle, setConnectToggle] = useState(false)
  const strTrunc = `${walletAddress?.slice(0, 4)}...${walletAddress?.slice(-4)}`
  const { open } = useWeb3Modal()

  const openWalletConnectionModal = async () => {
    await open()
  }

  const handleConnect = () => {
    setConnectToggle(!connectToggle)
  }

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
    breakMark: 992,
  })

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogoContainer>
          <Link href='/'>NFT FASH</Link>
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
          <ConnectBtn onClick={openWalletConnectionModal}>
            {walletIsConnected ? (
              <div>
                <p>{strTrunc}</p>
                <span></span>
                <span></span>
              </div>
            ) : (
              'Connect Wallet'
            )}
          </ConnectBtn>

          <AnimatePresence>
            <HeaderNavList
              mobileNavToggle={mobileNavToggle}
              onClick={() => setMobileNavToggle(false)}
              variants={mobileNavVariant(switchNavWidth ? '500px' : '100vw')}
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
                    isDemoConnected={IsUserConnected}
                    specialTitle={item.title}
                  >
                    <div className='list_container'>
                      <Link href={item.link}>{item.title}</Link>
                    </div>
                  </MenuList>
                )
              })}
            </HeaderNavList>
          </AnimatePresence>
        </HeaderNav>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header
