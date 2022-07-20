import React from "react";
import styled from "styled-components";
import Bound from "../components/Bound";
import Card from "../components/Card";
import BoundBackground1 from "../components/BoundBackground1";
import Text from "../components/Text";
import { NextPage } from "next";

const Scard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  flex: 1;
  margin: 0 1.5rem;
  margin-bottom: 2rem;
  overflow: auto;
`;

const Impact: NextPage = () => {
  return (
    <Bound>
      <BoundBackground1 />
      <Scard>
        <Text type="h5">Hi there, let&apos;s see how much you&apos;ve improved!</Text>
      </Scard>
    </Bound>
  );
};

export default Impact;
