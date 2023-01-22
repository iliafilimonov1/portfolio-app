import Button from '@/components/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { countSlice } from '@/store/reducers/CountSlice';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  const { count } = useAppSelector((state) => state.countReducer);
  const { inc } = countSlice.actions;
  const dispatch = useAppDispatch();

  return (
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
      <div className="bg-pink-200 pt-[200px]">
        {count}
        <Button
          className="bg-green-300 p-2 rounded-sm"
          onClick={() => dispatch(inc(5))}
        >
          Плюс
        </Button>
      </div>
    </div>
  );
};

export default Home;
