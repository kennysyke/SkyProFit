import React, { useState } from 'react'
import * as Styled from './styles'
import { ModalWindow } from '../VPmodalProgress/modalProgress'

export const Exercises = ({ exercises, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  if (isLoading) {
    return <h1>Идет подгрузка данных</h1>
   }

  return (
    <Styled.ExercisesBox>
      <Styled.ExercisesTitle>Упражнения</Styled.ExercisesTitle>
      <Styled.ExercisesList>
        {exercises.map((ex, i) => (
          <Styled.ExercisesListItems key={i}>{ex}</Styled.ExercisesListItems>
        ))}
      </Styled.ExercisesList>
      <Styled.BtnEnter onClick={handleOpenModal}>Заполнить свой прогресс</Styled.BtnEnter>
      {isModalOpen && <ModalWindow onClose={handleCloseModal} exercises={exercises} />}
    </Styled.ExercisesBox>
  )
}
