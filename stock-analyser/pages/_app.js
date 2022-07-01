import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useStore, wrapper } from '../redux/store';


function StockAnalyserApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  // Import bootsrap here to work with components that use Javascript
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, []);

  return (    
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    )
}

export default wrapper.withRedux(StockAnalyserApp)