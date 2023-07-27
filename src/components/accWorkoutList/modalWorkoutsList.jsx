import React from 'react'
import * as Styled from './styles'
import { useGetCoursesQuery } from '../../redux/fitnesApiBase'

import { useGetWorkoutsQuery } from '../../redux/workoutsApi'

export const ModalWorkout = ({ onClose, cardId }) => {
  const userID = localStorage.getItem('userId')
  const { data: coursesData, isLoading: isCoursesLoading } = useGetCoursesQuery()
  const { data: workoutsData, isLoading: isWorkoutsLoading } = useGetWorkoutsQuery()

  if (isCoursesLoading) {
    return <h1>Данные загружаются...</h1>
  }
  if (isWorkoutsLoading) {
    return <h1>Данные загружаются...</h1>
  }

  const course = Object.values(coursesData)
  const courses = course.find((cours) => cours._id === cardId)
  const workout = Object.values(workoutsData)
  const workouts = workout.filter((work) => courses.workout.includes(work._id))

  const handleClose = () => {
    onClose()
  }

  // Функция для извлечения чисел из строки с помощью регулярного выражения
  function extractNumbersFromString(str) {
    const regex = /\d+/g
    return str.match(regex).map(Number)
  }

  // Функция для подсчета суммы чисел в массиве
  function sumArrayNumbers(arr) {
    return arr.reduce((sum, num) => sum + +num, 0)
  }

  // Функция для проверки равенства суммы чисел users и exercises
  function checkSumEquality(w) {
    const users = w.users

    if (!users || !users[userID]) {
      return false
    }

    const userNumbers = w.users[userID]
    const exerciseNumbers = w.exercises.flatMap((elem) => extractNumbersFromString(elem))

    const userSum = sumArrayNumbers(userNumbers)
    const exerciseSum = sumArrayNumbers(exerciseNumbers)

    return userSum === exerciseSum
  }

  function renderWorkoutItem(obj) {
    const isSumEqual = checkSumEquality(obj)

    if (isSumEqual) {
      return (
        <Styled.WorkoutItemFull to={`/account/${obj._id}`} key={obj._id}>
          {obj.name}
        </Styled.WorkoutItemFull>
      )
    } else {
      return (
        <Styled.WorkoutItem to={`/account/${obj._id}`} key={obj._id}>
          {obj.name}
        </Styled.WorkoutItem>
      )
    }
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
              .map((obj) => renderWorkoutItem(obj))}
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
