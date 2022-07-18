import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Text from "./Text";

const SCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  flex: 1;
  margin: 0;
  margin-bottom: 4.5rem;
  position: relative;
`;

const STitle = styled(Text)`
  font-size: 1rem;
  color: #ffffff;
  mix-blend-mode: overlay;
  padding-bottom: 0.3rem;
`;

const SQA = styled(Text)`
  font-size: 1.4rem;
  color: #ffffff;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0;
  max-width: 100%;
  /* background: red; */
`;

const SBoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0;
  max-width: 100%;
  /* background: red; */
  flex: 1;
`;

const STextBorderContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const STextBorder = styled.div`
  mix-blend-mode: overlay;
  position: absolute;
  inset: 0;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
`;

const STextArea = styled.textarea`
  border: 2px solid transparent;
  font-size: 16px;
  padding: 10px 6px;
  margin-top: 0.2em;
  margin-bottom: 0;
  border-radius: 0.5rem;
  color: white;
  background-color: transparent;
  resize: none;
  flex: 1;
  position: relative;
  z-index: 1;
`;

const ReflectCard: React.FC = () => {
  return (
    <SCard>
      <SBox>
        <STitle>Reflect</STitle>
        <SQA>Hey, how are you feeling today?</SQA>
      </SBox>
      <SBoxFlex>
        <STitle>Response</STitle>
        <STextBorderContainer>
          <STextArea
            id="description"
            // cols={30}
            // rows={8}
            // value={Response}
            // onChange={(e) => setResponse(e.target.value)}
          />
          <STextBorder></STextBorder>
        </STextBorderContainer>
      </SBoxFlex>
    </SCard>
  );
};

export default ReflectCard;
