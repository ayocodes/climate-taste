import React from "react";
import styled from "styled-components";

interface IReflectIndicator {
  index: number;
  active: boolean;
}

interface ISIndicator {
  active: boolean;
}

const SReflectIndicator = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  height: 0.3rem;
`;

const SIndicator = styled.div<ISIndicator>`
  flex: 1;
  margin: 0 0.1rem;
  background: ${({active}) => active? "#ffffff" : "#707070"};
`;



const ReflectIndicator: React.FC<IReflectIndicator> = ({ index, active }) => {
  const dummy = [1, 2, 3, 4, 6];
  return (
    <SReflectIndicator >
      {dummy.map((_, i) => (
        <>
          <SIndicator active = {active}/>
        </>
      ))}
    </SReflectIndicator>
  );
};

export default ReflectIndicator;
