import React, { useState, FormEvent, ChangeEvent } from 'react'

//Styled components
import { CustomBtn } from 'styles/globalStyles'
import {
  SignUpContainer,
  HeaderWrapper,
  InputWrapper,
  InputType,
} from './SignUpFormStyles'

// import styles from 'components/contact.module.scss'
import Image from 'next/image'
import Link from 'next/link'

//LOGO IMAGE
import logo from 'public/images/job-hub.png'

const SignUpForm = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.fullName && user.email && user.password) {
      setUser({
        fullName: '',
        email: '',
        password: '',
      })
      setTouched({
        fullName: false,
        email: false,
        password: false,
      })
    }
  }

  return (
    <SignUpContainer>
      <HeaderWrapper>
        <span>
          <Link href={'/'}>
            <Image src={logo} alt='logo' width={50} height={50} />
          </Link>
        </span>

        <h1>Create an account</h1>
      </HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Full name</label>
          <InputType
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Enter your Full name'
            isTouched={touched.fullName}
            isUser={!user.fullName}
            // className={`${
            //   touched.fullName && !user.fullName
            //     ? 'inputEmpty'
            //     : `${styles.input__text}`
            // }`}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, fullName: true })}
            value={user.fullName}
            required
          />
          {touched.fullName && !user.fullName ? (
            <p>Please enter your Full name</p>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <label>Email</label>
          <InputType
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            isTouched={touched.email}
            isUser={!user.email}
            // className={`${
            //   touched.email && !user.email
            //     ? 'inputEmpty'
            //     : `${styles.input__text}`
            // }`}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, email: true })}
            value={user.email}
            required
          />
          {touched.email && !user.email ? (
            <p>Please enter a valid email</p>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <label>Password</label>
          <InputType
            type='password'
            name='password'
            id='password'
            placeholder='Enter a password'
            isTouched={touched.password}
            isUser={!user.password}
            // className={`${
            //   touched.password && !user.password
            //     ? 'inputEmpty'
            //     : `${styles.input__text}`
            // }`}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, password: true })}
            value={user.password}
            required
          />
          {touched.password && !user.password ? (
            <p>Please enter a password</p>
          ) : null}
        </InputWrapper>

        <CustomBtn type='submit'>Create account</CustomBtn>
      </form>
      <span>
        Already have an account? <Link href={'/login'}>Login</Link>
      </span>
    </SignUpContainer>
  )
}

export default SignUpForm