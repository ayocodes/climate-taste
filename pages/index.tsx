import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Bound from "../components/Bound";
import Card from "../components/Card";
import BoundBackground from "../components/BoundBackground";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Climate Taste</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bound>
        <BoundBackground />
        <Link href="/new-journal">
          <a>
            <Card>hh</Card>
          </a>
        </Link>
        <Card>hh</Card>
        <Card>hh</Card>
      </Bound>
    </>
  );
};

export default Home;
