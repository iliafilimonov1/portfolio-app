import MainLayout from '@/Layouts/MainLayout';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default App;
