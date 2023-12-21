import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignInRequest } from 'api-requests/authentication';
import { useAuth } from 'hooks/useAuthProvider';
import { JobSeekerProfileTypes } from 'types/profileTypes';

//Styled components
import { CustomBtn } from 'styles/globalStyles';
import {
  SignUpContainer,
  HeaderWrapper,
  InputWrapper,
  InputType,
} from 'components/forms/sign-up/SignUpFormStyles';
import {
  CheckboxContainer,
  InputCheckbox,
  CheckboxLabel,
} from './LoginFormStyles';

//Next components
import Image from 'next/image';
import Link from 'next/link';

//LOGO IMAGE
import logo from 'public/images/Contentlogo-home.png';

interface LoginDataType {
  token: string | null;
  userType: 'jobseeker' | 'employer' | null;
}

const LoginForm = () => {
  const router = useRouter();
  const {
    resetToken,
    handleSetUserType,
    showAlert,
    user: userData,
    userType,
    fetchUserProfile,
    token,
  } = useAuth();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  //Checkbox state
  const [isChecked, setIsChecked] = useState(false);

  //To check if the form-fields where touched or not
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // Login data
  const [loginData, setLoginData] = useState<LoginDataType>({
    token: null,
    userType: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //Form for handling the submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.email && user.password) {
      try {
        const data = await SignInRequest(user);
        showAlert(true, 'SignIn successful!', 'success');

        setUser({
          email: '',
          password: '',
        });

        setTouched({
          email: false,
          password: false,
        });

        setIsChecked(false);

        if (data?.data) {
          setLoginData(data?.data);
        }

        // console.log('login data', data);

        // //Store all values
        // resetToken(data?.data?.token);
        // handleSetUserType(data?.data?.userType);

        // localStorage.setItem('userToken', data?.data?.token);
        // localStorage.setItem('userType', data?.data?.userType);
      } catch (error: any) {
        console.error('Signin error:', error);
        showAlert(true, error.message, 'failure');
      }
    }
  };

  // Set user data on login and get token, user type and user data
  useEffect(() => {
    if (loginData.token && loginData.userType) {
      resetToken(loginData.token);
      handleSetUserType(loginData.userType);

      localStorage.setItem('userToken', loginData.token);
      localStorage.setItem('userType', loginData.userType);

      fetchUserProfile(loginData.token, loginData.userType);

      console.log('Heyy');
    }
  }, [loginData, userData]);

  // Handle redirect if user has already filled the signup form
  useEffect(() => {
    if (userType === 'jobseeker') {
      if (userData?.hasOwnProperty('cvUrl')) {
        router.push('apply-for-job/home');
      } else {
        router.push('/apply-for-job/personal-profile'); // Redirect to jobSeekerProfileSetUp
      }
    } else if (userType === 'employer') {
      router.push('/post-job/personal-profile'); // Redirect to employeeProfileSetUp
    }
  }, [userType, userData, token]);

  useEffect(() => {
    if (token && userType) fetchUserProfile(token, userType);
  }, [token, userType, userData]);

  console.log('user data', userData, userType, token);
  console.log('login data', loginData);

  return (
    <SignUpContainer>
      <HeaderWrapper>
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>

        <h1>Log in to your account</h1>
        <p>Welcome back! Please enter your details</p>
      </HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Email</label>
          <InputType
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
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
            type="password"
            name="password"
            id="password"
            placeholder="Enter a password"
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
          <CheckboxLabel htmlFor="checkbox">
            <InputCheckbox
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Remember for 30days
          </CheckboxLabel>
          <Link href={'/'}>Forgot password</Link>
        </CheckboxContainer>

        <CustomBtn type="submit">Sign in</CustomBtn>
      </form>
      <span>
        Don't have an account? <Link href={'/jobseeker-signup'}>Sign up</Link>
      </span>
    </SignUpContainer>
  );
};

export default LoginForm;
