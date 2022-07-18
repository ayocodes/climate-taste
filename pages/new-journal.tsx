import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Bound from "../components/Bound";
import BoundBackground from "../components/BoundBackground";
import ReflectCard from "../components/ReflectCard";
import ReflectIndicator from "../components/ReflectIndicator";
import ReflectNav from "../components/ReflectNav";

const SBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1.5rem;
  margin-top: 0.7rem;
`;

const newJournal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Climate Taste</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bound>
      <BoundBackground />
        <SBox>
          <ReflectIndicator index={0} active={false} />
          <ReflectCard />
          <ReflectNav />
        </SBox>
      </Bound>
    </>
  );
};

export default newJournal;