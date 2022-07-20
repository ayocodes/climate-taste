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
  top: 29.5rem;
  left: 5.1rem;
`;
const SEllipse2 = styled.img`
  position: absolute;
  right: 0.5rem;
  top: 2.1rem;
`;
const SEllipse3 = styled.img`
  position: absolute;
  top: 17rem;
  left: 0.75rem;
`;
const SEllipse4 = styled.img`
  position: absolute;
  top: 2.125rem;
  left: 6.125rem;
`;
const SRectangle1 = styled.img`
  position: absolute;
  top: 5rem;
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

const BoundBackground2 = () => {
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

export default BoundBackground2;
