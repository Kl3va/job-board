import React, { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuthProvider';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import FindJobHeader from '../FindJobHeader/FindJobHeader';
import { findJobNavData } from 'data/find-job/headerNavData';

interface FindJobLayoutProps {
  children: ReactNode;
}

const FindJobLayout = ({ children }: FindJobLayoutProps) => {
  const { user, userType } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && userType === 'jobseeker') {
      setLoading(false);
    } else {
      router.push('/login');
    }
  }, []);

  if (loading) {
    // Render loading state or placeholder while authentication is resolving
    return <p>Loading...</p>;
  }

  return (
    <>
      <FindJobHeader {...findJobNavData} />
      {children}
    </>
  );
};

export default FindJobLayout;
