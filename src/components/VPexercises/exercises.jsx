import React, { useState } from 'react'
import * as Styled from '../VPmodalProgress/styles'
import { ModalWindow } from '../VPmodalProgress/modalProgress'

export const Exercises = ({ exercises }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  console.log(exercises)

  return (
    <Styled.ExercisesBox>
      <Styled.ExercisesTitle>Упражнения</Styled.ExercisesTitle>
      <Styled.ExercisesList>
        {exercises.map((ex) => (
          <Styled.ExercisesListItems>{ex}</Styled.ExercisesListItems>
        ))}
      </Styled.ExercisesList>
      <Styled.BtnEnter onClick={handleOpenModal}>Заполнить свой прогресс</Styled.BtnEnter>
      {isModalOpen && <ModalWindow onClose={handleCloseModal} exercises={exercises} />}
    </Styled.ExercisesBox>
  )
}
