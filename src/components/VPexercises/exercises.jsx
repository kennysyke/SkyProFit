import React, { useState } from 'react'
import * as Styled from './styles'
import { ModalWindow } from '../VPmodalProgress/modalProgress'

export const Exercises = ({ exercises, users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  console.log(exercises)
  console.log(users)

  return (
    <Styled.ExercisesBox>
      <Styled.ExercisesTitle>Упражнения</Styled.ExercisesTitle>
      <Styled.ExercisesList>
        {exercises.map((ex) => (
          <Styled.ExercisesListItems>{ex}</Styled.ExercisesListItems>
        ))}
      </Styled.ExercisesList>
      <Styled.BtnEnter onClick={handleOpenModal}>Заполнить свой прогресс</Styled.BtnEnter>
      {isModalOpen && <ModalWindow onClose={handleCloseModal} exercises={exercises} users={users} />}
    </Styled.ExercisesBox>
  )
}
