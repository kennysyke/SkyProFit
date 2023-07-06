import React from 'react';
import * as Styled from './Styles';
import yoga from '../../images/courses-mini/yoga-card.png';
// import Newlogin from './newlogin';
// import Newpas from './newpas';

function Profile() {
  
  return (
    <div >
      <Styled.ContainerProfile>
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
     
      <Styled.ContainerCourse>
        <h1>Мои курсы</h1>
        <Styled.CourseBox>
        <img
                  src={yoga}
                  alt="Course yoga"
                />
                <img
                  src={yoga}
                  alt="Course yoga"
                />
                <img
                  src={yoga}
                  alt="Course yoga"
                />

        </Styled.CourseBox>
        
       
      </Styled.ContainerCourse>
     

      {/* <Newlogin/>
      <Newpas/> */}
    </div>
    
    )
}

export default Profile;