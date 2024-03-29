import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
// import { useStore, wrapper } from '../utils/redux/store'
import { ThemeProvider, CssBaseline } from '@mui/material'

import baseTheme from '../styles/mui_themes'


function StockAnalyserApp({ Component, pageProps }) {
  // Import bootsrap here to work with components that use Javascript
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, []);

  return (    
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <style>{'body { background-color: #14131A }'}</style>
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default StockAnalyserApp