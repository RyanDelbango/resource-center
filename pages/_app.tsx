import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { store, persistor } from '../libs/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider >
  );
};

export default App;
