import React from 'react';
import * as Styled from "./styles";


export const ProgressBar = () => {
    return (
      <Styled.ProgressBox>
       <Styled.ProgressTitle>Мой прогресс по тренировке 2:</Styled.ProgressTitle>
       <Styled.ProgressBoxRange>
       <Styled.LabelProgress>Наклоны вперед 
       <Styled.ProgressBar1 type='range'/>
       </Styled.LabelProgress>
       <Styled.LabelProgress>Наклоны назад 
       <Styled.ProgressBar2 type='range'/>
       </Styled.LabelProgress>
       <Styled.LabelProgress>Поднятие ног, согнутых в коленях 
       <Styled.ProgressBar3 type='range'/>
       </Styled.LabelProgress>
       </Styled.ProgressBoxRange>
      </Styled.ProgressBox>
      );
      
}
