import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Bound from "../components/Bound";
import Card from "../components/Card";
import BoundBackground from "../components/BoundBackground";
import styled from "styled-components";
import Text from "../components/Text";
import { useEffect, useState } from "react";

interface IPrevData {
  date: string;
  Title: string;
}

const SCard = styled(Card)`
  min-height: 10.5rem;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "macondo";
  margin: 0 1.5rem 1.5rem;
`;

const SCircle = styled.div`
  width: 3rem;
  background: white;
  mix-blend-mode: overlay;
  height: 3rem;
  border-radius: 50%;
`;

const data = [
  {
    date: "May 20",
    Title: "lovely...",
  },
  {
    date: "May 19",
    Title: "Peaches",
  },
];

const Home: NextPage = () => {
  const [prevData, setprevData] = useState<IPrevData[]>();

  useEffect(() => {
    setprevData(data);
  }, []);

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
            <SCard>
              <Text type="h4">Let's take today's Journal!</Text>
            </SCard>
          </a>
        </Link>
        {prevData?.map((data, i) => (
          <Link href={data.date} key={i}>
            <a>
              <SCard>
                <Text type="h6">{data.date}</Text>
                <SCircle></SCircle>
                <Text type="h6">{data.Title}</Text>
              </SCard>
            </a>
          </Link>
        ))}
      </Bound>
    </>
  );
};

export default Home;
