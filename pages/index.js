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
      </Head>
      <Navbar />
      <div className=""></div>
    </>
  );
}
