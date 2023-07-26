import React from 'react'
import * as Styled from './styles'
import { useGetCoursesQuery } from '../../redux/fitnesApiBase'

import { useGetWorkoutsQuery } from '../../redux/workoutsApi'

export const ModalWorkout = ({ onClose, cardId }) => {
  const { data: coursesData, isLoading: isCoursesLoading } = useGetCoursesQuery()
  const { data: workoutsData, isLoading: isWorkoutsLoading } = useGetWorkoutsQuery()

  if (isCoursesLoading) {
    return <h1>Идет подгрзука данных</h1>
  }
  if (isWorkoutsLoading) {
    return <h1>Идет подгрзука данных</h1>
  }

  const course = Object.values(coursesData)
  const courses = course.find((cours) => cours._id === cardId)

  const workout = Object.values(workoutsData)
  const workouts = workout.filter((work) => courses.workout.includes(work._id))

  const handleClose = () => {
    onClose()
  }

  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.CloseButton onClick={handleClose}>х</Styled.CloseButton>
        <Styled.ModalHeader>Выберите тренировку</Styled.ModalHeader>
        <Styled.Scroll>
          <Styled.WorkoutList>
            {workouts
              .sort((a, b) => extractMainName(a.name).localeCompare(extractMainName(b.name)))
              .map((w) => (
                <Styled.WorkoutItem to={`/account/${w._id}`} key={w._id}>
                  <Styled.WorkoutName>
                    {w.name}
                    <svg width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12' cy='13.5' r='11.5' stroke='#06B16E' />
                    <path d='M6 9.81034L11.775 15.5L27 0.5' stroke='#06B16E' />
                  </svg>
                    </Styled.WorkoutName>
                  
                </Styled.WorkoutItem>
              ))}
          </Styled.WorkoutList>
        </Styled.Scroll>
      </Styled.ModalContent>
    </Styled.ModalContainer>
  )
}

function extractMainName(name) {
  // Регулярное выражение для выделения текста после второго символа "/"
  const regex = /\/.*?\/(.*?)(\/|\||$)/
  const match = name.match(regex)
  if (match && match[1]) {
    return match[1].trim()
  }
  return name
}
