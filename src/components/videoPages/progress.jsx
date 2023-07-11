import React from 'react';
import * as Styled from "./styles";


export const ProgressBar = () => {
    return (
      <Styled.ProgressBox>
        <Styled.ProgressTitle>
          Мой прогресс по тренировке 2:
        </Styled.ProgressTitle>
        <Styled.ProgressBoxRange>
          <Styled.LabelProgress>
            Наклоны вперед
            <Styled.ContainerProgressBar1>
              <Styled.ProgressBar1 type="range" />
            </Styled.ContainerProgressBar1>
          </Styled.LabelProgress>
          <Styled.LabelProgress>
            Наклоны назад
            <Styled.ContainerProgressBar2>
              <Styled.ProgressBar2 type="range" />
            </Styled.ContainerProgressBar2>
          </Styled.LabelProgress>
          <Styled.LabelProgress>
            Поднятие ног, согнутых в коленях
            <Styled.ContainerProgressBar3>
              <Styled.ProgressBar3 type="range" />
            </Styled.ContainerProgressBar3>
          </Styled.LabelProgress>
        </Styled.ProgressBoxRange>
      </Styled.ProgressBox>
    );
      
}
