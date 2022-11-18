import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
