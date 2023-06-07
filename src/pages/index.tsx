import Input from '@/components/ui/Input/Input';
import Head from 'next/head';
import React from 'react';

/** Домашняя страница */
const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta
        content="Generated by create next app"
        name="description"
      />
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link
        href="/favicon.ico"
        rel="icon"
      />
    </Head>
    <div className="px-6 py-10 grid grid-cols-2 gap-2">
      <div>
        <Input
          label="Имя"
        />
        <Input
          label="Фамилия"
        />
        <Input
          label="Отчество"
        />
      </div>
    </div>
  </div>
);

export default Home;
