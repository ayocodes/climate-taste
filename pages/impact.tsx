import React from "react";
import styled from "styled-components";
import Bound from "../components/Bound";
import Card from "../components/Card";
import BoundBackground1 from "../components/BoundBackground1";
import Text from "../components/Text";

const Scard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  flex: 1;
  margin: 0 1.5rem;
  margin-bottom: 2rem;
  overflow: auto;
`;

const impact = () => {
  return (
    <Bound>
      <BoundBackground1 />
      <Scard>
        <Text type="h5">Hi there, let's see how much you've improved!</Text>
      </Scard>
    </Bound>
  );
};

export default impact;
