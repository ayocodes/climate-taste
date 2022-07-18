import React from "react";
import styled from "styled-components";


interface IBoundProp {
  children: React.ReactNode;
  className?: any;
}

const SBound = styled.div`
  width: 21rem;
  height: 39rem;
  background: #000000;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  padding-top: 4.5rem;
  overflow: scroll;
  position: relative;
`;

const Bound: React.FC<IBoundProp> = ({ children, className }) => {
  return <SBound className={className}>{children}</SBound>;
};

export default Bound;
