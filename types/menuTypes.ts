import { StaticImageData } from 'next/image'

export interface HeaderDataTypes {
  logo: {
    title: string
    image: StaticImageData
    link: string
  }
  menu: {
    id: number
    title: string
    link: string
    subMenu:
      | {
          id: number
          linkName: string
          link: string
        }[]
      | []
  }[]
}
