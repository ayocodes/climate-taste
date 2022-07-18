import React from "react";
import styled from "styled-components";

interface ICardProps {
  children: React.ReactNode;
  className?: any;
}



const SCard = styled.div`
  background: linear-gradient(180deg, #3e404b 0%, #232429 100%);
  border-radius: 1.25rem;
  margin:  0 1.5rem 1.5rem;
position: relative;
z-index: 1;
`;

const card: React.FC<ICardProps> = ({ children,  className }) => {
  return <SCard className={className}>{children}</SCard>;
};

export default card;
