import React from 'react';
import LoginForm from 'components/forms/login/LoginForm';
import { useAuth } from 'hooks/useAuthProvider';

type Props = {};

const LoginPage = (props: Props) => {
  return <LoginForm />;
};

export default LoginPage;
