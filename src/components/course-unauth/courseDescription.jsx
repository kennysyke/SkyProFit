import React from 'react';
import { useParams} from 'react-router-dom';
import { useGetCoursesQuery } from '../../redux/fitnesApiBase';
import { ContactContainer } from './contactContainer';
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
    <Styled.CourseContent>
      <Styled.CourseBannerContent>
        <Styled.TitleCard>Йога</Styled.TitleCard>
      </Styled.CourseBannerContent>
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
      <ContactContainer/>

    
    </Styled.CourseContent>
  );
}