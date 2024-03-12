//import logoImg from 'public/images/job-hub.png'
import logoImg from 'public/images/work-nest.png'
import samuelAvatar from 'public/images/samuel-avatar.png'

export const findJobNavData = {
  logo: {
    title: 'WorkNest',
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

export const jobseekerMenuData = [
  {
    icon: 'fa-regular fa-window-maximize',
    url: '/apply-for-job/applied-jobs',
    title: 'Applied Jobs',
  },
  {
    icon: 'fa-regular fa-floppy-disk',
    url: '/apply-for-job/saved-jobs',
    title: 'Saved Jobs',
  },
  {
    icon: 'fa-regular fa-gear',
    url: '/apply-for-job/home/account-settings',
    title: 'Account Settings',
  },
  {
    icon: 'fa-light fa-user-group',
    url: '/apply-for-job/home/account-settings/profile-preview',
    title: 'Career Profile',
  },
]
