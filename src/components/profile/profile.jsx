import React from "react";
import * as Styled from "./Styles";
import { Link } from "react-router-dom";
import { Newlogin } from "../form/data change/newlogin";
import { Newpas } from "../form/data change/newpas";

export function Profile() {
  return (
    <div>
      <Styled.ContainerProfile>
        <Styled.HeaderContainer>
          <Styled.Logo src="images/icons/logo-black.svg" alt="logo" />
        </Styled.HeaderContainer>
        <h1>Мой профиль</h1>
        <p>Логин: sergey.petrov96</p>
        <p>Пароль: 4fkhdj880d</p>
        <Styled.BtnBox>
          <Styled.BtnChange>Редактировать логин</Styled.BtnChange>
          <Styled.BtnChange>Редактировать пароль</Styled.BtnChange>
        </Styled.BtnBox>
      </Styled.ContainerProfile>

      <h1>Мои курсы</h1>
      <Styled.CoursesContainer>
        <Link to="/">
          <Styled.CourseCard src="images/courses-mini/yoga-card.png" alt="Course yoga" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src="images/courses-mini/stretching-card.png" alt="Course stretching" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src="images/courses-mini/bodyflex-card.png" alt="Course bodyflex" />
        </Link>
      </Styled.CoursesContainer>

      <Newlogin />
      <Newpas />
    </div>
  );
}
