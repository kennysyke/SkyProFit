import React from 'react'
import * as Styled from './styles'
import { useSelector } from 'react-redux'

export const ProgressBar = ({ exercises }) => {
  const inputs = useSelector((state) => [
    { id: 1, value: state.modalWindow.input1 },
    { id: 2, value: state.modalWindow.input2 },
    { id: 3, value: state.modalWindow.input3 },
    { id: 4, value: state.modalWindow.input4 },
    { id: 5, value: state.modalWindow.input5 },
  ])

  const numbers = []

  const regex = /\d+/

  for (let item of exercises) {
    const match = item.match(regex)
    if (match) {
      numbers.push(parseInt(match[0]))
    }
  }

  const calculateProgressBarWidth = (value, max) => {
    return `${(value / max) * 100}%`
  }

  const extractedText = exercises.map((str) => str.split('(')[0].trim())

  return (
    <Styled.ProgressBox>
      <Styled.ProgressTitle>Мой прогресс по тренировке 2:</Styled.ProgressTitle>
      <Styled.ProgressBoxRange>
        {extractedText.length > 0 && (
          <React.Fragment>
            {extractedText.map((ex, index) => (
              <Styled.ProgressItem key={index}>
                <Styled.LabelProgress>{ex}</Styled.LabelProgress>
                <Styled.ContainerProgressBar1
                  progressWidth={calculateProgressBarWidth(inputs[index].value, numbers[index])}
                >
                  <Styled.ProgressBar1 type='range' min='0' max={numbers[index]} value={inputs[index].value} readOnly />
                  <Styled.PercentageLabel>
                    {Math.round((inputs[index].value / numbers[index]) * 100)}%
                  </Styled.PercentageLabel>
                </Styled.ContainerProgressBar1>
              </Styled.ProgressItem>
            ))}
          </React.Fragment>
        )}
      </Styled.ProgressBoxRange>
    </Styled.ProgressBox>
  )
}
