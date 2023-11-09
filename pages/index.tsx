import type { NextPage } from 'next'
import { Main } from 'styles/globalStyles'
import Header from 'components/global/header/Header'
import { menuData } from 'data/home/menuData'

const Home: NextPage = () => {
  return (
    <Main>
      <Header data={menuData} />
      <div>Hello</div>
    </Main>
  )
}
export default Home
