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
  const [inputErrors, setInputErrors] = useState({})

  const handleInputChange = (e, inputId) => {
    const newValues = { ...inputValues }
    const inputValue = e.target.value.trim()

    // Проверка на ввод цифр больше 0
    if (!/^\d+$/.test(inputValue) || Number(inputValue) <= 0) {
      setInputErrors((prevErrors) => {
        return { ...prevErrors, [inputId]: 'Пожалуйста, введите цифры больше 0' }
      })
    } else {
      setInputErrors((prevErrors) => {
        const errorsCopy = { ...prevErrors }
        delete errorsCopy[inputId]
        return errorsCopy
      })
    }

    newValues[userId][Number(inputId.replace('input', '')) - 1] = inputValue
    setInputValues(newValues)
  }

  const handleSubmit = async () => {
    if (!isUpdating) {
      // Проверка наличия ошибок ввода
      if (Object.keys(inputErrors).length === 0) {
        try {
          let path = window.location.pathname
          let workoutId = path.split('/')[2]
          const { data } = await updateUserData({ updatedUsers: inputValues, workoutId })
          console.log(data)
          setShowModalOk(true)
          // console.log(inputValues)
          refetch()
        } catch (err) {
          console.error(err)
        }
      } else {
        console.log('Пожалуйста, исправьте ошибки ввода:', inputErrors)
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
        <Styled.Scroll>
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
                isInvalid={inputErrors[`input${index + 1}`]}
              />
              {inputErrors[`input${index + 1}`] && (
                <span style={{ color: 'red' }}>{inputErrors[`input${index + 1}`]}</span>
              )}
            </React.Fragment>
          ))}
        </Styled.Scroll>
        <Styled.ModalButton onClick={handleSubmit} id='submitBtn'>
          Отправить
        </Styled.ModalButton>
        {showModalOk && <ModalOk showModalOk={showModalOk} setShowModalOk={setShowModalOk} onClose={onClose} />}
      </Styled.ModalContent>
    </Styled.ModalContainer>
  )
}
