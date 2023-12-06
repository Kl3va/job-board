import type { NextPage } from 'next'
import { Main } from 'styles/globalStyles'
import { useAuth } from 'hooks/useAuthProvider'

//COMPONENTS
import Header from 'components/global/header/Header'
import HeroSection from 'components/home/HeroSection/HeroSection'
import AboutSection from 'components/home/AboutSection/AboutSection'
import ServiceFaq from 'components/global/ServiceFaq/ServiceFaq'
import CTASection from 'components/home/CallToAction/CtaSection'
import MainFooter from 'components/global/footer/MainFooter'
import RoutePopup from 'components/global/pop-ups/route-popup/RoutePopup'

//DATA
import { menuData } from 'data/home/menuData'
import { heroData } from 'data/home/heroData'
import { aboutData } from 'data/home/aboutData'
import MainBg from 'components/global/background/MainBg'

const Home: NextPage = () => {
  const { activePopup } = useAuth()

  return (
    <>
      <Header data={menuData} />
      <Main>
        <HeroSection {...heroData} />
        <AboutSection {...aboutData} />
        <ServiceFaq />
        <CTASection />
        {activePopup === 'route-popup' && <RoutePopup />}
        {activePopup !== null && <MainBg />}
      </Main>
      <MainFooter />
    </>
  )
}
export default Home
