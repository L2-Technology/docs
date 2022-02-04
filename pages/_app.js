import 'nextra-theme-docs/style.css'
import { ThemeProvider, useTheme } from 'next-themes'


export default function Nextra({ Component, pageProps }) {
  const { theme, setTheme } = useTheme()
  setTheme('dark')
  return <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
}
