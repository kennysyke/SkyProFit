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

  console.log(courses);
  console.log(courses.workout);

  console.log(workout);
  console.log(workouts);

  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>Выберите тренировку</Styled.ModalHeader>
        <div>
          {workouts.map((w) => (
            <Link to={`/account/${w._id}`} key={w._id}>
              <div>{w.name}</div>
            </Link>
          ))}
        </div>
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
};
