import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./styles";
import bodyflex from "../../images/courses-mini/bodyflex-card.png";
import dancefit from "../../images/courses-mini/dancefit-card.png";
import step from "../../images/courses-mini/step-card.png";
import stretching from "../../images/courses-mini/stretching-card.png";
import yoga from "../../images/courses-mini/yoga-card.png";

export function Center() {
  return (
    <Styled.CenterContainer>
      <Styled.CoursesContainer>
        <Link to="/">
          <Styled.CourseCard src={yoga} alt="Course yoga" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src={stretching} alt="Course stretching" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src={dancefit} alt="Course dancefit" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src={step} alt="Course step" />
        </Link>
        <Link to="/">
          <Styled.CourseCard src={bodyflex} alt="Course bodyflex" />
        </Link>
      </Styled.CoursesContainer>
      <Styled.BtnUp>Наверх↑</Styled.BtnUp>
    </Styled.CenterContainer>
  );
}