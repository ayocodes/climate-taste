import React from "react";
import styled from "styled-components";

const SBox = styled.div`
  position: absolute;
  inset: 0;
`

const SBlobBox = styled.div`
  position: relative;
`;

const SEllipse1 = styled.img`
  position: absolute;
  top: 14.8rem;
  left: 8.6rem;
`;
const SEllipse2 = styled.img`
  position: absolute;
  right: .42rem;
  top: 2.2rem;
`;
const SEllipse3 = styled.img`
  position: absolute;
  top: .85rem;
  right: 9.2rem;
`;
const SEllipse4 = styled.img`
  position: absolute;
  top: 33.56rem;
  left: 16.7rem;
`;
const SRectangle1 = styled.img`
  position: absolute;
  top: 4.8rem;
  right: 8rem;
  mix-blend-mode: overlay;
`;
const SRectangle2 = styled.img`
  position: absolute;
  top: 1.28rem;
  left: 7rem;
  mix-blend-mode: overlay;
`;

const BoundBackground1 = () => {
  return (
    <SBox>
      <SBlobBox>
        <SEllipse1 src="/Ellipse1.svg" alt="" />
        <SEllipse2 src="/Ellipse2.svg" alt="" />
        <SEllipse3 src="/Ellipse3.svg" alt="" />
        <SEllipse4 src="/Ellipse4.svg" alt="" />
        <SRectangle1 src="/Rectangle11.svg" alt="" />
        <SRectangle2 src="/Rectangle12.svg" alt="" />
      </SBlobBox>
    </SBox>
  );
};

export default BoundBackground1;
