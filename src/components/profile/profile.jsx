import React from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo } from "../main/header/logo";
import { ProfileIcon } from "../main/header/profileIcon";


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
        <Logo/>
        <ProfileIcon/>
        </Styled.HeaderContainer>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileSubTitle>Логин: sergey.petrov96</Styled.ProfileSubTitle>
        <Styled.ProfileSubTitle>Пароль: 4fkhdj880d</Styled.ProfileSubTitle>
        <Styled.BtnBox>
          <Styled.BtnChange onClick={handleLoginChange}>Редактировать логин</Styled.BtnChange>
          <Styled.BtnChange onClick={handlePasChange}>Редактировать пароль</Styled.BtnChange>
        </Styled.BtnBox>
      </Styled.ContainerProfile>

      <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
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

    </div>
  );
}
