import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuthProvider';

import { jobseekerMenuData } from 'data/find-job/headerNavData';

const JobseekerMenuBar = styled.aside`
  position: fixed;
  top: 4.5rem;
  right: 10vw;

  width: min(100%, 15rem);

  background: #ffffff;
  z-index: 5000;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  font-size: 0.875rem;
  color: var(--color-font-200);

  display: grid;

  i {
    background-color: var(--color-font-200);
    background-image: var(--color-font-200);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  li {
    cursor: pointer;

    padding: 0.625rem 1rem;
    border-bottom: 1px solid var(--color-border-200);

    span {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    @media only screen and (min-width: 972px) {
      &:first-child,
      &:nth-child(2) {
        display: none;
      }
    }
  }

  button {
    background: inherit;
    border: none;
    cursor: pointer;
    padding: 0.625rem 1rem;
    border-radius: 0.5rem;

    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`;

const JobseekerMenu = () => {
  const { activePopup, handleActivePopup, handleLogout } = useAuth();

  return (
    <>
      {activePopup === 'jobseeker-menu' ? (
        <JobseekerMenuBar onClick={() => handleActivePopup(null)}>
          <ul>
            {jobseekerMenuData.map((data, index) => {
              return (
                <li key={index}>
                  <Link href={data.url}>
                    <span>
                      <i className={data.icon}></i>
                      {data.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Log out
          </button>
        </JobseekerMenuBar>
      ) : (
        ''
      )}
    </>
  );
};

export default JobseekerMenu;
