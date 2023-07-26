import React from 'react'
import * as Styled from './styles'

export const ProgressBar = ({ exercises, users }) => {
  const userId = localStorage.getItem('userId')
  const userExercises = users ? users[userId] || Array(exercises.length).fill(0) : Array(exercises.length).fill(0)

  console.log(users)
  console.log(userId)

  const numbers = []

  const regex = /\d+/

  for (let item of exercises) {
    const match = item.match(regex)
    if (match) {
      numbers.push(parseInt(match[0]))
    }
  }

  let maxSum = 0

  const calculateProgressBarWidth = (value, max) => {
    maxSum += max
    console.log('Сумма значений max:', maxSum)

    return `${(value / max) * 100}%`
  }

  //Сумма упражнений, выполненных пользователем
  const sumUserExercises = userExercises
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  console.log(sumUserExercises)

  const extractedText = exercises.map((str) => str.split('(')[0].trim())

  console.log(extractedText)

  return (
    <Styled.ProgressBox>
      <Styled.ProgressTitle>Мой прогресс по тренировке 2:</Styled.ProgressTitle>
      <Styled.ProgressBoxRange>
        <Styled.LabelBox>
          {extractedText.map((ex, index) => (
            <Styled.LabelProgress key={index}>{ex}</Styled.LabelProgress>
          ))}
        </Styled.LabelBox>
        {extractedText.length > 0 && (
          <Styled.InputsBox>
            {userExercises.map((num, index) => (
              <Styled.ContainerProgressBar1 key={index} progressWidth={calculateProgressBarWidth(num, numbers[index])}>
                <Styled.ProgressBar1 type='range' min='0' max={numbers[index]} value={num} readOnly />
                <Styled.PercentageLabel>{Math.round((num / numbers[index]) * 100)}%</Styled.PercentageLabel>
              </Styled.ContainerProgressBar1>
            ))}
          </Styled.InputsBox>
        )}
      </Styled.ProgressBoxRange>
    </Styled.ProgressBox>
  )
}
