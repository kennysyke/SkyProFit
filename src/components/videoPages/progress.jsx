import React from 'react';
import * as Styled from "./styles";
import { useSelector } from "react-redux";

export const ProgressBar = ({ exercises }) => {
  const inputs = useSelector((state) => [
    { id: 1, value: state.modalWindow.input1 },
    { id: 2, value: state.modalWindow.input2 },
    { id: 3, value: state.modalWindow.input3 },
  ]);

  console.log(inputs[0].value);
  console.log(inputs[1].value);
  console.log(inputs[2].value);

  const calculateProgressBarWidth = (value) => {
    return `${(value / 10) * 100}%`;
  };

  const extractedText = exercises.map((str) => str.split("(")[0].trim());

  return (
    <Styled.ProgressBox>
      <Styled.ProgressTitle>Мой прогресс по тренировке 2:</Styled.ProgressTitle>
      <Styled.ProgressBoxRange>
        <Styled.LabelBox>
          {extractedText.map((ex, index) => (
            <Styled.LabelProgress key={index}>{ex}</Styled.LabelProgress>
          ))}
        </Styled.LabelBox>
        {extractedText.length > 0 && (
          <Styled.InputsBox>
            {extractedText.map((_, index) => (
              <Styled.ContainerProgressBar1
                key={index}
                style={{
                  progressWidth: calculateProgressBarWidth(inputs[index].value),
                }}
              >
                <Styled.ProgressBar1
                  type="range"
                  min="0"
                  max="10"
                  value={inputs[index].value}
                  readOnly
                />
              </Styled.ContainerProgressBar1>
            ))}
          </Styled.InputsBox>
        )}
      </Styled.ProgressBoxRange>
    </Styled.ProgressBox>
  );
};
