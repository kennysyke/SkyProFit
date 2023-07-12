import React from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Newlogin } from "../form/data change/newlogin";
import { Newpas } from "../form/data change/newpas";

export function Profile() {
  const navigate = useNavigate();

  const handleLoginChange = () => {
    navigate("/newlogin");
  };

  function handlePasChange() {
    navigate("/newpas");
  }
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
          <Styled.BtnChange onClick={handleLoginChange}>Редактировать логин</Styled.BtnChange>
          <Styled.BtnChange onClick={handlePasChange}>Редактировать пароль</Styled.BtnChange>
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
