import '@fortawesome/fontawesome-free/css/all.css'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'styles/theme'
import Footer from 'components/global/footer/Footer'
import Header from 'components/global/header/Header'
import ScrollTop from 'components/global/scrollTop/ScrollTop'

import 'styles/fontawesome-pro/css/all.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {/* <Header data={menuData.header} /> */}
      <Component {...pageProps} />
      {/* <Footer data={menuData.footer} /> */}

      <ScrollTop />
    </ThemeProvider>
  )
}

export default MyApp
