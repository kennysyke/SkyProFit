import React from 'react';
import { useParams} from 'react-router-dom';
import { useGetCoursesQuery } from '../../redux/fitnesApiBase';
import { CourseBanner } from './courseBanner';
import * as Styled from "./styles";

export function CourseDescription() {
  const {data, isLoading}=useGetCoursesQuery()  
  const params = useParams(); 

  if(isLoading){
     return <h1>Идет подгрзука данных</h1>
     }
  const course = Object.values(data)
  const courses = course.find((cours) => cours._id === params.id); 
  
  console.log(courses)
  return (
    <div>
      <CourseBanner src="images/courses-wide/yoga.png" alt='Course yoga'/>
      <div>
        <Styled.TitleLarge>Подойдет для вас, если:</Styled.TitleLarge>
        <Styled.StyledOrderedList>
        {courses.reasons.map((res, i) => ( 
          <Styled.StyledListItem key={i}>{res} </Styled.StyledListItem>
          ))}    
        </Styled.StyledOrderedList>
      </div>
      <div>
        <Styled.TitleLarge>Направления:</Styled.TitleLarge>
        <Styled.StyledTwoColumnList>
          {courses.directions.map((direct, i) => (               
            <Styled.TextListSmall key={i}>{direct}</Styled.TextListSmall>                              
            ))}         
        </Styled.StyledTwoColumnList>
      </div>

      <div>
        <Styled.DetailsText>{courses.details}</Styled.DetailsText>
      </div>

      <Styled.ContactContainer>
        <Styled.LeftContainer>
          <Styled.ContactText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </Styled.ContactText>
          <Styled.ContactBtn>Записаться на тренировку</Styled.ContactBtn>
        </Styled.LeftContainer>
        <div>
          <Styled.ContactImage src="images/phone.png" alt="phone in the hand" />
        </div>
      </Styled.ContactContainer>
    </div>
  );
}