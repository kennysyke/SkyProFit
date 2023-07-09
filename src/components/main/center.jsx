import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./styles";

export function Center() {
  return (
    <Styled.CenterContainer>
      <Styled.CoursesContainer>
        <Link to="/course">
          <Styled.CourseCard src="images/courses-mini/yoga-card.png" alt="Course yoga" />
        </Link>

        <Link to="/course">
          <Styled.CourseCard src="images/courses-mini/stretching-card.png" alt="Course stretching" />
        </Link>

        <Link to="/course">
          <Styled.CourseCard src="images/courses-mini/dancefit-card.png" alt="Course dancefit" />
        </Link>

        <Link to="/course">
          <Styled.CourseCard src="images/courses-mini/step-card.png" alt="Course step" />
        </Link>
        <Link to="/course">
          <Styled.CourseCard src="images/courses-mini/bodyflex-card.png" alt="Course bodyflex" />
        </Link>
      </Styled.CoursesContainer>
      <Styled.ButtonContainer>
        <Styled.BtnUp>Наверх↑</Styled.BtnUp>
      </Styled.ButtonContainer>
    </Styled.CenterContainer>
  );
}