import type { NextPage } from 'next'
import { Main } from 'styles/globalStyles'

//COMPONENTS
import Header from 'components/global/header/Header'
import HeroSection from 'components/home/HeroSection/HeroSection'
import AboutSection from 'components/home/AboutSection/AboutSection'
import ServiceFaq from 'components/global/ServiceFaq/ServiceFaq'
import CTASection from 'components/home/CallToAction/CtaSection'
import MainFooter from 'components/global/footer/MainFooter'

//DATA
import { menuData } from 'data/home/menuData'
import { heroData } from 'data/home/heroData'
import { aboutData } from 'data/home/aboutData'

const Home: NextPage = () => {
  return (
    <>
      <Header data={menuData} />
      <Main>
        <HeroSection {...heroData} />
        <AboutSection {...aboutData} />
        <ServiceFaq />
        <CTASection />
      </Main>
      <MainFooter />
    </>
  )
}
export default Home
