import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface CustomBtnLinkProps {
  bgColor?: string
  textColor?: string
}

const CustomSpan = styled.span<CustomBtnLinkProps>`
  display: flex;
  padding: 0.5rem 1.75rem;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  cursor: pointer;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: ${(props) =>
    props.bgColor ? 'none' : '1px solid var(--color-border-100)'};
  background-color: ${(props) => props.bgColor || 'var(--color-bg-100)'};
  color: ${(props) => props.textColor || 'var(--color-font-100)'};

  &:hover {
    opacity: 0.8;
  }
`

interface CustomLinkProps {
  href: string
  icon?: string
  bgColor?: string
  textColor?: string
  text: string
}

const CustomLinkBtn = ({
  href,
  icon,
  bgColor,
  textColor,
  text,
}: CustomLinkProps) => {
  return (
    <Link href={href}>
      <CustomSpan bgColor={bgColor} textColor={textColor}>
        {icon && <i className={icon}></i>}
        {text}
      </CustomSpan>
    </Link>
  )
}

export default CustomLinkBtn
