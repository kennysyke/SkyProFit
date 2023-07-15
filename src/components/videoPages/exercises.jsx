import React, { useState } from "react";
import * as Styled from "./styles";
// import { useGetWorkoutsQuery } from "../../redux/workoutsApi";
import { ModalWindow } from "./modalProgress";
// import { useParams } from "react-router-dom";

export const Exercises = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Styled.ExercisesBox>
      <Styled.ExercisesTitle>Упражнения</Styled.ExercisesTitle>
      <Styled.ExercisesList>
        <Styled.ExercisesListItems>
          Наклон вперед (10 повторений)
        </Styled.ExercisesListItems>
        <Styled.ExercisesListItems>
          Наклон назад (10 повторений)
        </Styled.ExercisesListItems>
        <Styled.ExercisesListItems>
          Поднятие ног, согнутых в коленях (5 повторений)
        </Styled.ExercisesListItems>
      </Styled.ExercisesList>
      <Styled.BtnEnter onClick={handleOpenModal}>
        Заполнить свой прогресс
      </Styled.BtnEnter>
      {isModalOpen && <ModalWindow onClose={handleCloseModal} />}
    </Styled.ExercisesBox>
  );
};
