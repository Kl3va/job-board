import React from 'react'
import navImg from 'public/images/Contentlogo-home.png'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from 'hooks/useAuthProvider'

//Styled-component
import {
  RoutePopupContainer,
  RoutePopupHeader,
  RoutePopupPath,
  SinglePopupPath,
} from './RoutePopupStyles'

const routeData = [
  {
    img: navImg,
    url: '/jobseeker-signup',
    title: 'Find a Job',
  },
  {
    img: navImg,
    url: '/employer-signup',
    title: 'Post a Job',
  },
]

const RoutePopup = () => {
  const { handleActivePopup } = useAuth()

  return (
    <RoutePopupContainer onClick={() => handleActivePopup(null)}>
      <RoutePopupHeader>
        <div>
          <h2>Select account type</h2>
          <p>What would you like to do on WorkNest?</p>
        </div>

        <i className='fa-solid fa-xmark'></i>
      </RoutePopupHeader>

      <RoutePopupPath>
        {routeData.map((data, index) => {
          return (
            <Link href={data.url} key={index}>
              <SinglePopupPath>
                <img src={data.img.src} alt='path-to-signup' />
                <p>{data.title}</p>
              </SinglePopupPath>
            </Link>
          )
        })}
      </RoutePopupPath>
    </RoutePopupContainer>
  )
}

export default RoutePopup
