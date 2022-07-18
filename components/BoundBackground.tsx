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
  top: 22.25rem;
  right: 0.3rem;
`;
const SEllipse2 = styled.img`
  position: absolute;
  left: 1.67rem;
  top: 32.5rem;
`;
const SEllipse3 = styled.img`
  position: absolute;
  top: 1.9rem;
  left: 0.8rem;
`;
const SEllipse4 = styled.img`
  position: absolute;
  top: 20.5rem;
  left: 0.56rem;
`;
const SRectangle1 = styled.img`
  position: absolute;
  top: 15rem;
  right: 1.875rem;
  mix-blend-mode: overlay;
`;
const SRectangle2 = styled.img`
  position: absolute;
  top: 6.6rem;
  left: 0.8rem;
  mix-blend-mode: overlay;
`;
const SRectangle3 = styled.img`
  position: absolute;
  top: 18.6rem;
  left: 3.6rem;
  mix-blend-mode: overlay;
`;

const BoundBackground = () => {
  return (
    <SBox>
      <SBlobBox>
        <SEllipse1 src="/Ellipse1.svg" alt="" />
        <SEllipse2 src="/Ellipse2.svg" alt="" />
        <SEllipse3 src="/Ellipse3.svg" alt="" />
        <SEllipse4 src="/Ellipse4.svg" alt="" />
        <SRectangle1 src="/Rectangle11.svg" alt="" />
        <SRectangle2 src="/Rectangle12.svg" alt="" />
        <SRectangle3 src="/Rectangle13.svg" alt="" />
      </SBlobBox>
    </SBox>
  );
};

export default BoundBackground;
