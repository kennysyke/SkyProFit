import React from "react";
import * as Styled from "./styles";
import { useGetCoursesQuery } from "../../redux/fitnesApiBase";
import { Link } from "react-router-dom";

import { useGetWorkoutsQuery } from "../../redux/workoutsApi";

export const ModalWorkout = ({ onClose, cardId }) => {
  console.log(cardId);

  const { data: coursesData, isLoading: isCoursesLoading } =
    useGetCoursesQuery();
  const { data: workoutsData, isLoading: isWorkoutsLoading } =
    useGetWorkoutsQuery();

  console.log(coursesData);
  console.log(workoutsData);

  if (isCoursesLoading) {
    return <h1>Идет подгрзука данных</h1>;
  }
  if (isWorkoutsLoading) {
    return <h1>Идет подгрзука данных</h1>;
  }

  const course = Object.values(coursesData);
  const courses = course.find((cours) => cours._id === cardId);

  const workout = Object.values(workoutsData);
  const workouts = workout.filter((work) => courses.workout.includes(work._id));

  const handleClose = () => {
    onClose();
  };

  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          Выберите тренировку
          <Styled.CloseButton onClick={handleClose}>X</Styled.CloseButton>
        </Styled.ModalHeader>

        <Styled.WorkoutList>
          {workouts.map((w) => (
            <Link to={`/account/${w._id}`} key={w._id}>
              <Styled.WorkoutItem>{w.name}</Styled.WorkoutItem>
            </Link>
          ))}
        </Styled.WorkoutList>
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
};
