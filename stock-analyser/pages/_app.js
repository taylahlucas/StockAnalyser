import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  // Import bootsrap here to work with components that use Javascript
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp