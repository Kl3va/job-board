import logoImg from 'public/images/job-hub.png'
import samuelAvatar from 'public/images/samuel-avatar.png'

export const findJobNavData = {
  logo: {
    title: 'JobHub',
    image: logoImg,
    link: '/apply-for-job/home',
  },
  profile: {
    image: samuelAvatar,
    names: 'Samuel Adeleke',
  },

  navLinks: [
    {
      url: '/apply-for-job/home',
      title: 'Home',
    },
    {
      url: '/apply-for-job/applied-jobs',
      title: 'Applied Jobs',
    },
    {
      url: '/apply-for-job/saved-jobs',
      title: 'Saved Jobs',
    },
  ],
}
