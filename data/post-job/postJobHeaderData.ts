import logoImg from 'public/images/job-hub.png'
import samuelAvatar from 'public/images/samuel-avatar.png'

export const postJobNavData = {
  logo: {
    title: 'JobHub',
    image: logoImg,
    link: '/post-job/home',
  },
  profile: {
    image: samuelAvatar,
    names: 'Samuel Adeleke',
  },

  navLinks: [
    {
      url: '/post-job/home',
      title: 'Home',
    },
  ],
}

export const employerMenuData = [
  {
    icon: 'fa-solid fa-arrow-right-from-bracket',
    title: 'Log out',
  },
]
