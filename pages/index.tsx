import type { NextPage } from 'next';
import Head from 'next/head';
import Greeting from 'components/greeting';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Glue</title>
        <meta name='description' content='Glue app' />
      </Head>
      <Greeting />
    </div>
  );
};

export default Home;
