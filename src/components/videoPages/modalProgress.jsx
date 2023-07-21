import React, { useState } from 'react'
import * as Styled from './styles'
import { useDispatch } from 'react-redux'
import { setInput1, setInput2, setInput3, setInput4, setInput5 } from '../../redux/slices/modal-store'
import { ModalOk } from './modalOk'

export const ModalWindow = ({ onClose, exercises }) => {
  const [showModalOk, setShowModalOk] = useState(false)
  console.log(exercises)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setShowModalOk(true)
  }

  const handleInputChange = (e, inputName) => {
    const inputValue = e.target.value

    switch (inputName) {
      case 'input1':
        dispatch(setInput1(Number(inputValue)))
        break
      case 'input2':
        dispatch(setInput2(Number(inputValue)))
        break
      case 'input3':
        dispatch(setInput3(Number(inputValue)))
        break
      case 'input4':
        dispatch(setInput4(Number(inputValue)))
        break
      case 'input5':
        dispatch(setInput5(Number(inputValue)))
        break
      default:
        break
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
