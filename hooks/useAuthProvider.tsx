import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { User, JobSeekerProfile, EmployerProfile } from 'types/profileTypes';

import { useRouter } from 'next/router';

//Api for fetching user profile
import {
  GetJobSeekerProfileRequest,
  GetEmployerProfileRequest,
} from 'api-requests/account-user';

interface FiltersType {
  [key: string]: string[];
}

export interface AuthContextType {
  searchValue: string;
  cvOption: number;
  activeJobId: string;
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  handleFilterChange: (filterType: string, value: string) => void;
  setActiveJobId: React.Dispatch<React.SetStateAction<string>>;
  setcvOption: React.Dispatch<React.SetStateAction<number>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  resetToken: (value: string) => void;
  activePopup: string | null;
  handleActivePopup: (value: string | null) => void;
  handleSetUserType: (value: 'employer' | 'jobseeker') => void;
  resetUser: (user: User) => void;
  user: JobSeekerProfile | EmployerProfile | null;
  userType: 'jobseeker' | 'employer' | null;
  token: string | null;
  alert: { show: boolean; msg: string; type: string };
  showAlert: (show?: boolean, msg?: string, type?: string) => void;
  handleLogout: () => void;
  fetchUserProfile: (token: string, type: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useContext must be used within a CardStateProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [cvOption, setcvOption] = useState(0);
  const [activeJobId, setActiveJobId] = useState('');
  const [user, setUser] = useState<JobSeekerProfile | EmployerProfile | null>(
    null
  );
  const [token, setToken] = useState<string | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [userType, setUserType] = useState<'jobseeker' | 'employer' | null>(
    null
  );
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [canChangeRoute, setCanChangeRoute] = useState(false);

  const [filters, setFilters] = useState<FiltersType>({
    workType: [],
    employmentType: [],
    pay: [],
    experienceLevel: [],
    // Initialize other filters
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((filter) => filter !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handleActivePopup = (value: string | null): void => {
    // setActivePopup(value)
    if (activePopup !== value) {
      setActivePopup(value);
    } else {
      setActivePopup(null);
    }
  };

  const resetToken = (value: string): void => {
    setToken(value);
  };

  const handleSetUserType = (value: 'jobseeker' | 'employer'): void => {
    setUserType(value);
  };

  //Set user object
  const resetUser = (user: User) => {
    setUser(user);
  };

  //Show Alert
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  //Log user out of the application
  const handleLogout = () => {
    //Clear user's auth data from localStorage and context api
    localStorage.removeItem('userToken');
    localStorage.removeItem('userType');
    setToken(null);
    setUserType(null);
    showAlert(true, 'Logout Successful!', 'success');
    setUser(null);

    //route user to the login page
    router.push('/login');
  };

  // Function to fetch user profile based on userType
  const fetchUserProfile = async (token: string, type: string) => {
    try {
      let userData: User | null = null;

      if (type === 'employer') {
        userData = await GetEmployerProfileRequest(token);
      } else if (type === 'jobseeker') {
        userData = await GetJobSeekerProfileRequest(token);
      }

      if (userData) {
        setUser(userData); // Set the user data in your context or state
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    // Check if the user token or userType exists in local storage
    const storedToken = localStorage.getItem('userToken');
    const storedUserType = localStorage.getItem('userType');

    if (storedToken && storedUserType) {
      setToken(storedToken);
      setUserType(storedUserType as 'jobseeker' | 'employer');

      fetchUserProfile(storedToken, storedUserType);
    }
  }, []);

  useEffect(() => {
    if (userType !== 'employer') {
      const redirectPage = setTimeout(() => {
        setCanChangeRoute(true);
      }, 5000);

      return () => clearTimeout(redirectPage);
    }
  }, [userType, router]);

  useEffect(() => {
    if (canChangeRoute) {
      router.push('/login');
    }
  }, [canChangeRoute]);

  return (
    <AuthContext.Provider
      value={{
        searchValue,
        cvOption,
        activeJobId,
        filters,
        setFilters,
        handleFilterChange,
        setActiveJobId,
        setcvOption,
        setSearchValue,
        resetToken,
        resetUser,
        handleSetUserType,
        userType,
        user,
        token,
        activePopup,
        handleActivePopup,
        alert,
        showAlert,
        handleLogout,
        fetchUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
