import '@fortawesome/fontawesome-free/css/all.css'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'styles/theme'
import { AuthProvider } from 'hooks/useAuthProvider'
// import Footer from 'components/global/footer/Footer'
import Header from 'components/global/header/Header'
import ScrollTop from 'components/global/scrollTop/ScrollTop'
import Alert from 'components/global/alert/Alert'
import MainBg from 'components/global/background/MainBg'

import 'styles/fontawesome-pro/css/all.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <GlobalStyles />
        <Alert />
        <MainBg />

        {/* <Header data={menuData.header} /> */}
        <Component {...pageProps} />
        {/* <Footer data={menuData.footer} /> */}
        <ScrollTop />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
