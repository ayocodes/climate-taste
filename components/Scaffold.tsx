import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Background from "./Background";

interface IScaffoldProp {
  children: React.ReactNode;
}

const SScaffold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  return (
    <SScaffold>
      <NavBar />
      {children}
      <Background />
    </SScaffold>
  );
};

export default Scaffold;
