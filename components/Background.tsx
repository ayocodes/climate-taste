import React from "react";
import styled from "styled-components";

const SMain = styled.div`
  position: fixed;
  inset: 0;
z-index: -1;
`;

const SBackground = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  /* background: cyan; */
`;

const SBlob1 = styled.img`
  position: absolute;
  top: -6.3rem;
  right: -5.6rem; 
  width: 24rem;

`;

const SBlob2 = styled.img`
  position: absolute;
  bottom: -6.74rem;
  left: -5.64rem;
  width: 21rem;
`;

const Background = () => {
  return (
    <SMain>
      <SBackground>
        <SBlob1 src="/blob1.svg"></SBlob1>
        <SBlob2 src="/blob2.svg"></SBlob2>
      </SBackground>
    </SMain>
  );
};

export default Background;
