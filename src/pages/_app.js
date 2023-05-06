import { Provider } from 'react-redux'
import { store } from '../store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import AmazonFooter from './AmazonFooter'
const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
      <AmazonFooter/>
    </Provider>
    </SessionProvider>

  )
}

export default MyApp