import Button from '@/components/ui/Button/Button';
import Head from 'next/head';
import React from 'react';
import { Mail } from 'lucide-react';

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
    <div className="d-flex">
      <Button
        size="sm"
        variant="default"
      >
        Default
      </Button>
      <Button
        size="sm"
        variant="destructive"
      >
        Destructive
      </Button>
      <Button
        size="sm"
        variant="outline"
      >
        Outline
      </Button>
      <Button
        size="sm"
        variant="subtle"
      >
        Subtle
      </Button>
      <Button
        size="sm"
        variant="ghost"
      >
        Ghost
      </Button>

      <Button
        size="sm"
        variant="link"
      >
        Link
      </Button>
      <Button disabled>
        Please wait
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </Button>
    </div>
  </div>
);

export default Home;
