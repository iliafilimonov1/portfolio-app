import MainLayout from '@/Layouts/MainLayout';
import { setupStore } from '@/store/store';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import { Inter } from '@next/font/google';

const sans = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const store = setupStore();

const App = ({ Component, pageProps }: AppProps) => (
  <main className={sans.className}>
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
    <div id="modal" />
  </main>

);

export default App;
