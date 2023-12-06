import React, { useState, FormEvent, ChangeEvent } from 'react'
import { EmployerSignUpRequest } from 'api-requests/authentication'
import { useRouter } from 'next/router'

//Styled components
import { CustomBtn } from 'styles/globalStyles'
import {
  SignUpContainer,
  HeaderWrapper,
  InputWrapper,
  InputType,
} from '../sign-up/SignUpFormStyles'

import Image from 'next/image'
import Link from 'next/link'

//LOGO IMAGE
import logo from 'public/images/Contentlogo-home.png'

export interface CompanySignUpTypes {
  companyName: string
  companyRepresentative: string
  companyEmail: string
  password: string
}

const EmployerSignUpForm = () => {
  const router = useRouter()

  const [user, setUser] = useState<CompanySignUpTypes>({
    companyName: '',
    companyRepresentative: '',
    companyEmail: '',
    password: '',
  })

  const [touched, setTouched] = useState({
    companyName: false,
    companyRepresentative: false,
    companyEmail: false,
    password: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      user.companyName &&
      user.companyEmail &&
      user.password &&
      user.companyRepresentative
    ) {
      try {
        const userData: CompanySignUpTypes = {
          companyName: user.companyName,
          companyEmail: user.companyEmail,
          password: user.password,
          companyRepresentative: user.companyRepresentative,
        }

        // Call the handleSignUp function from your API passing user data
        const signUpResponse = await EmployerSignUpRequest(userData)

        //Handle successful signup response here
        console.log('Signup successful!', signUpResponse)

        //Move to login page
        router.push('/login')

        // if (signUpResponse.error) {
        //   // Handle the error here
        //   console.error(signUpResponse.error)
        // }

        // Reset form fields and touched state
        setUser({
          companyName: '',
          companyRepresentative: '',
          companyEmail: '',
          password: '',
        })

        setTouched({
          companyName: false,
          companyRepresentative: false,
          companyEmail: false,
          password: false,
        })
      } catch (error: any) {
        console.error('Signup error:', error)
        // Handle signup errors, show error messages, etc.
      }
    }
  }

  return (
    <SignUpContainer>
      <HeaderWrapper>
        <Link href={'/'}>
          <Image src={logo} alt='logo' width={50} height={50} />
        </Link>

        <h1>Create an account</h1>
      </HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Company's name</label>
          <InputType
            type='text'
            name='companyName'
            id='companyName'
            placeholder='Enter your Full name'
            isTouched={touched.companyName}
            isUser={!user.companyName}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, companyName: true })}
            value={user.companyName}
            required
          />
          {touched.companyName && !user.companyName ? (
            <p>Please enter your Full name</p>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <label>Company's email</label>
          <InputType
            type='email'
            name='companyEmail'
            id='companyEmail'
            placeholder='Enter your email'
            isTouched={touched.companyEmail}
            isUser={!user.companyEmail}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, companyEmail: true })}
            value={user.companyEmail}
            required
          />
          {touched.companyEmail && !user.companyEmail ? (
            <p>Please enter a valid email</p>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <label>Company's Representative</label>
          <InputType
            type='text'
            name='companyRepresentative'
            id='companyRepresentative'
            placeholder='Enter your Rep name'
            isTouched={touched.companyRepresentative}
            isUser={!user.companyRepresentative}
            onChange={handleChange}
            onBlur={() =>
              setTouched({ ...touched, companyRepresentative: true })
            }
            value={user.companyRepresentative}
            required
          />
          {touched.companyRepresentative && !user.companyRepresentative ? (
            <p>Please enter your Full name</p>
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

export default EmployerSignUpForm
