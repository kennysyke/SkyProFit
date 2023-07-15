import React from 'react';
import * as Styled from "./styles";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const input1 = useSelector((state) => state.modalWindow.input1);
  const input2 = useSelector((state) => state.modalWindow.input2);
  const input3 = useSelector((state) => state.modalWindow.input3);

  console.log(input1);
  console.log(input2);
  console.log(input3);

  const calculateProgressBarWidth = (value) => {
    return `${(value / 10) * 100}%`;
  };

  return (
    <Styled.ProgressBox>
      <Styled.ProgressTitle>Мой прогресс по тренировке 2:</Styled.ProgressTitle>
      <Styled.ProgressBoxRange>
        <Styled.LabelBox>
          <Styled.LabelProgress>Наклоны вперед</Styled.LabelProgress>
          <Styled.LabelProgress>Наклоны назад</Styled.LabelProgress>
          <Styled.LabelProgress>
            Поднятие ног, согнутых в коленях
          </Styled.LabelProgress>
        </Styled.LabelBox>
        <Styled.InputsBox>
          <Styled.ContainerProgressBar1
            progressWidth={calculateProgressBarWidth(input1)}
          >
            <Styled.ProgressBar1
              type="range"
              min="0"
              max="10"
              value={input1}
              style={{
                width: calculateProgressBarWidth(input1),
              }}
              readOnly
            />
          </Styled.ContainerProgressBar1>
          <Styled.ContainerProgressBar2
            progressWidth={calculateProgressBarWidth(input2)}
          >
            <Styled.ProgressBar2
              type="range"
              min="0"
              max="10"
              value={input2}
              style={{
                width: calculateProgressBarWidth(input2),
              }}
              readOnly
            />
          </Styled.ContainerProgressBar2>
          <Styled.ContainerProgressBar3
            progressWidth={calculateProgressBarWidth(input3)}
          >
            <Styled.ProgressBar3
              type="range"
              min="0"
              max="10"
              value={input3}
              style={{
                width: calculateProgressBarWidth(input3),
              }}
              readOnly
            />
          </Styled.ContainerProgressBar3>
        </Styled.InputsBox>
      </Styled.ProgressBoxRange>
    </Styled.ProgressBox>
  );
};
