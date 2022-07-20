import styled from "styled-components";



const SButton = styled.div`
  background-color: transparent;
  width: 1.3rem;
  margin-bottom: 4.5rem;
  cursor: pointer;
  z-index: 1;
  /* max-height: 20rem; */
`;

const SButtonLeft = styled(SButton)`
  border-radius: 1.5rem 0 0 1.5rem;
`;
const SButtonRight = styled(SButton)`
  border-radius: 0 1.5rem 1.5rem 0;

`;

const SReflectNav = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  margin: 1.5rem;
  margin-top: 5rem;

justify-content: space-between;
`;

const ReflectNav = () => {
  return (
    <SReflectNav>
      <SButtonLeft onClick={() => alert("left!")}></SButtonLeft>

      <SButtonRight onClick={() => alert("Right!")}></SButtonRight>
    </SReflectNav>
  );
};

export default ReflectNav;
