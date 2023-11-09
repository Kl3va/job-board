export interface ThemeTypes {
  bg100: string
  bg200: string
  bg300: string
  accent100: string
  accent200: string
  accent300: string
  accent400: string
  font100: string
  font200: string
  font300: string
  font400: string
  font500: string
  font600: string
  shadow100: string
  shadow200: string
  shadow300: string
  border100: string
  scrollBar100: string
}

export const lightTheme = {
  bg100: '#F9FAFB',
  bg200: '#F5F8FF',
  bg300: 'hsl(216, 100%, 18%)',
  bg400: 'hsl(0, 0%, 100%)',
  bg500: 'hsl(0, 0%, 90%)',
  accent100: '#444CE7',
  accent200: 'hsl(200, 91%, 95%)',
  accent300: 'rgb(242, 242, 242, 0.3)',
  font100: '#667085',
  font200: '#101828',
  font300: 'hsl(219, 16%, 61%)',
  font400: 'rgba(0, 0, 0, 0.6)',
  font500: 'hsl(0, 0%, 100%)',
  font600: 'hsla(218, 80%, 2%, 0.5)',
  shadow100: '0px 0px 20px rgba(0,0,0,0.08)',
  shadow200: '0px 10px 40px rgba(0, 0, 0, 0.15)',
  shadow300: '0px 10px 20px rgba(0, 0, 0, 0.15)',
  border100: '#D0D5DD',
  scrollBar100: 'rgba(0, 0, 0, 0.1)',
}

// Added the initial styling
export const darkTheme = {
  bg100: 'hsla(218, 80%, 2%, 1)',
  bg200: 'rgba(83, 83, 83, 0.05)',
  bg300: '#121417',
  accent100: '#1B9DE7',
  accent200: '#13cc78',
  accent300: '#8B44FF',
  accent400: '#634BFA',
  font100: 'hsl(0, 0%, 100%)',
  font200: 'hsl(0, 0%, 80%)',
  font300: 'hsl(219, 16%, 61%)',
  font400: 'hsl(0, 0%, 40%)',
  font500: 'hsla(218, 80%, 2%, 1)',
  font600: 'rgb(242, 242, 242, 0.3)',
  shadow100: 'rgba(0, 0, 0, 0.08) 0px 0px 20px',
  shadow200: '0 -2px 10px rgb(242, 242, 242, 0.05)',
  shadow300: '0 -2px 10px rgb(242, 242, 242, 0.05)',
  border100: 'rgb(242, 242, 242, 0.03)',
  scrollBar100: 'hsl(0, 0%, 15%)',
}
