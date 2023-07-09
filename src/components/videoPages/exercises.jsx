import React from 'react';
import * as Styled from "./styles";
import { ButtonForm } from '../form/ButtonForm';

export const Exercises = () => {
    return (
      <Styled.ExercisesBox>
        <Styled.ExercisesTitle>Упражнения</Styled.ExercisesTitle>
        <Styled.ExercisesList>
        <Styled.ExercisesListItems>Наклон вперед (10 повторений)</Styled.ExercisesListItems>
        <Styled.ExercisesListItems>Наклон назад (10 повторений)</Styled.ExercisesListItems>
        <Styled.ExercisesListItems>Поднятие ног, согнутых в коленях (5 повторений)</Styled.ExercisesListItems>
        </Styled.ExercisesList>
        <ButtonForm text="Заполнить свой прогресс"/>
      </Styled.ExercisesBox>
      );
      
}

