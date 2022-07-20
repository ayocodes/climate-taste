import React, { useEffect, useState } from "react";
import Bound from "../components/Bound";
import BoundBackground from "../components/BoundBackground";
import Card from "../components/Card";
import Text from "../components/Text";
import styled from "styled-components";

interface IQAData {
  question: string;
  answer: string;
}

const SCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  flex: 1;
  margin: 0 1.5rem;
  margin-bottom: 2rem;
  overflow: auto;
`;

const STopic = styled(Text)`
  color: #ffffff;
  mix-blend-mode: overlay;
  margin-bottom: 1rem;
`;
const SQuestion = styled(Text)`
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
`;

const SAnswer = styled(Text)`
  margin-bottom: 1rem;
  font-weight: 300;
`;

const QAdata = [
  {
    date: "20 may, 2019",
    question: "How was your day?",
    answer:
      "well, it was real stressfulwell, it was real stressful well, it was real stressful well, it was real stressful well, it was real stressful",
  },
  {
    question: "Did you use the train?",
    answer: "yes",
  },
];

const Id = () => {
  const [dataQA, setDataQA] = useState<IQAData[]>();

  useEffect(() => {
    setDataQA(QAdata);
  }, []);

  return (
    <Bound>
      <BoundBackground />
      <SCard>
        <STopic>Peaches</STopic>
        {dataQA?.map((data, i) => (
          <div key = {i}>
            <SQuestion type="h5">{data.question}</SQuestion>
            <SAnswer>{data.answer}</SAnswer>
          </div>
        ))}
      </SCard>
    </Bound>
  );
};

export default Id;
