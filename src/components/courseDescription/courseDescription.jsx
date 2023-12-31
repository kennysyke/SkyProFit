import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCoursesQuery } from '../../redux/fitnesApiBase'
import { ContactContainer } from '../contactContainer/contactContainer'
import * as Styled from './styles'
import { CourseBanner } from '../courseBanner/courseBanner'

export function CourseDescription() {
  const { data, isLoading } = useGetCoursesQuery()
  const params = useParams()

  if (isLoading) {
    return <h1>Идет подгрзука данных</h1>
  }
  const course = Object.values(data)
  const courses = course.find((cours) => cours._id === params.id)

  return (
    <>
      <CourseBanner pic={courses.pic} name={courses.name}></CourseBanner>
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
      <ContactContainer />
    </>
  )
}
