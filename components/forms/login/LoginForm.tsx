import React, { useState, FormEvent, ChangeEvent } from 'react'

//Styled components
import { CustomBtn } from 'styles/globalStyles'
import {
  SignUpContainer,
  HeaderWrapper,
  InputWrapper,
  InputType,
} from 'components/forms/sign-up/SignUpFormStyles'
import {
  CheckboxContainer,
  InputCheckbox,
  CheckboxLabel,
} from './LoginFormStyles'

//Next components
import Image from 'next/image'
import Link from 'next/link'

//LOGO IMAGE
import logo from 'public/images/Contentlogo-home.png'

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  //Checkbox state
  const [isChecked, setIsChecked] = useState(false)

  //To check if the form-fields where touched or not
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  //Form for handling the submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.email && user.password) {
      setUser({
        email: '',
        password: '',
      })
      setTouched({
        email: false,
        password: false,
      })
      setIsChecked(false)
    }
  }

  return (
    <SignUpContainer>
      <HeaderWrapper>
        <Link href={'/'}>
          <Image src={logo} alt='logo' width={50} height={50} />
        </Link>

        <h1>Log in to your account</h1>
        <p>Welcome back! Please enter your details</p>
      </HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Email</label>
          <InputType
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            isTouched={touched.email}
            isUser={!user.email}
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
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, password: true })}
            value={user.password}
            required
          />
          {touched.password && !user.password ? (
            <p>Please enter a password</p>
          ) : null}
        </InputWrapper>

        <CheckboxContainer>
          <CheckboxLabel htmlFor='checkbox'>
            <InputCheckbox
              type='checkbox'
              name='checkbox'
              id='checkbox'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Remember for 30days
          </CheckboxLabel>
          <Link href={'/'}>Forgot password</Link>
        </CheckboxContainer>

        <CustomBtn type='submit'>Sign in</CustomBtn>
      </form>
      <span>
        Don't have an account? <Link href={'/sign-up'}>Sign up</Link>
      </span>
    </SignUpContainer>
  )
}

export default LoginForm
