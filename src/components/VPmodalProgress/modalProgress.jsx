import React, { useState } from 'react'
import * as Styled from './styles'
import { ModalOk } from '../VPmodalOk/modalOk'
import { useUpdateUserDataMutation, useGetWorkoutsQuery } from '../../redux/workoutsApi'

export const ModalWindow = ({ onClose, exercises }) => {
  const userId = localStorage.getItem('userId')
  const [showModalOk, setShowModalOk] = useState(false)

  const [inputValues, setInputValues] = useState({ [userId]: [] })
  const [updateUserData, { isLoading: isUpdating }] = useUpdateUserDataMutation()

  const { refetch } = useGetWorkoutsQuery()

  const handleInputChange = (e, inputId) => {
    const newValues = { ...inputValues }
    newValues[userId][Number(inputId.replace('input', '')) - 1] = e.target.value
    setInputValues(newValues)
  }

  const handleSubmit = async () => {
    if (!isUpdating) {
      try {
        let path = window.location.pathname
        let workoutId = path.split('/')[2]
        const { data } = await updateUserData({ updatedUsers: inputValues, workoutId })
        console.log('Updated user data:', data)
        setShowModalOk(true)
        console.log(inputValues)
        refetch()
      } catch (err) {
        console.error(err)
      }
    }
  }

  const extractedText = exercises.map((str) => str.split('(')[0].trim())

  const smallLetter = extractedText.map((element) => {
    const firstLetter = element.charAt(0).toLowerCase()
    const restOfWord = element.slice(1)
    return firstLetter + restOfWord
  })

  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>Мой прогресс</Styled.ModalHeader>
        {smallLetter.map((exercise, index) => (
          <React.Fragment key={index}>
            <Styled.ModalQuestion htmlFor={`input${index + 1}`}>
              Cколько раз вы сделали {exercise}?
            </Styled.ModalQuestion>
            <Styled.ModalInput
              type='text'
              id={`input${index + 1}`}
              placeholder='Введите значение'
              onChange={(e) => handleInputChange(e, `input${index + 1}`)}
            />
          </React.Fragment>
        ))}
        <Styled.ModalButton onClick={handleSubmit} id='submitBtn'>
          Отправить
        </Styled.ModalButton>
      </Styled.ModalContent>
      {showModalOk && <ModalOk showModalOk={showModalOk} setShowModalOk={setShowModalOk} onClose={onClose} />}
    </Styled.ModalContainer>
  )
}
