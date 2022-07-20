import React from "react";
import styled from "styled-components";
import Bound from "../components/Bound";
import BoundBackground2 from "../components/BoundBackground2";
import Card from "../components/Card";
import Text from "../components/Text";

const Scard = styled(Card)`
  min-height: 10.5rem;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 1.5rem 1.5rem;
`;

const explore = () => {
  return (
    <Bound>
      <BoundBackground2 />
      <Scard>
        Did you know?
        <Text>
          A single tree could provide oxygen for 4 people for a year! a single
          tree could provide oxygen for 4 people for a year!
        </Text>
      </Scard>
    </Bound>
  );
};

export default explore;
