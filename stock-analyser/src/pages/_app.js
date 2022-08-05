import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
// import { useStore, wrapper } from '../utils/redux/store'


function StockAnalyserApp({ Component, pageProps }) {
  // Import bootsrap here to work with components that use Javascript
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, []);

  return (    
    <div>
      <Component {...pageProps} />
    </div>
    )
}

export default StockAnalyserApp