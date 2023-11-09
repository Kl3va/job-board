import logoImg from 'public/images/job-hub.png'

export const menuData = {
  logo: {
    title: 'JobHub',
    image: logoImg,
    link: '/',
  },
  menu: [
    {
      id: 1,
      title: 'Home',
      link: '/',
      subMenu: [],
    },
    {
      id: 2,
      title: 'Products',
      link: '/products',
      subMenu: [
        {
          id: 1,
          linkName: 'Sub Menu 1',
          link: '/products',
        },
        {
          id: 2,
          linkName: 'Sub Menu 2',
          link: '/products',
        },
      ],
    },
    {
      id: 3,
      title: 'Pricing',
      link: '/pricing',
      subMenu: [],
    },
  ],
}
