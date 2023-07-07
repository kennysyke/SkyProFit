import React from 'react';
import * as Styled from './Styles';
import { Link } from 'react-router-dom';
import bodyflex from "../../images/courses-mini/bodyflex-card.png";
import stretching from "../../images/courses-mini/stretching-card.png";
import yoga from "../../images/courses-mini/yoga-card.png";
import {Newlogin} from '../form/newlogin';
import {Newpas} from '../form/newpas';

export function Profile() {
  
  return (
    <div >
      <Styled.ContainerProfile>
      <Styled.HeaderContainer>
          {/* <Styled.Logo src={logoBlack} alt="logo" /> */}
    </Styled.HeaderContainer>
        <h1>Мой профиль</h1>
        <p>Логин: sergey.petrov96</p>
        <p>Пароль: 4fkhdj880d</p>
        <Styled.BtnBox>
        <Styled.BtnChange>
        Редактировать логин
        </Styled.BtnChange>
        <Styled.BtnChange>
        Редактировать пароль
        </Styled.BtnChange>
        </Styled.BtnBox>
       

      </Styled.ContainerProfile>
     
     
        <h1>Мои курсы</h1>
        <Styled.CoursesContainer>
        <Link to="/">
          <Styled.CourseCard src={yoga} alt="Course yoga" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src={stretching} alt="Course stretching" />
        </Link>

        <Link to="/">
          <Styled.CourseCard src={bodyflex} alt="Course bodyflex" />
        </Link>
      </Styled.CoursesContainer>
     

      <Newlogin/>
      <Newpas/>
    </div>
    
    )
}
