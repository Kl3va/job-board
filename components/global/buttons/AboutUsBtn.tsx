import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const AboutUsLink = styled.span`
  display: grid;
  place-items: center;

  color: var(--color-font-300);
  width: 6.62rem;
  height: 1.7rem;
  border-radius: 1rem;
  background: var(--color-bg-300);
  mix-blend-mode: multiply;
`

const AboutUsBtn = () => {
  return (
    <Link href={'/about us'}>
      <AboutUsLink>About us</AboutUsLink>
    </Link>
  )
}

export default AboutUsBtn
