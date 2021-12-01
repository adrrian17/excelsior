/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head';
import Navbar from '../src/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Excelsior</title>
        <meta
          name="description"
          content="Testing out Marvel's API with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className=""></div>
    </>
  );
}
