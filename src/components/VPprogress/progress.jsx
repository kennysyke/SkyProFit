import React from 'react'
import * as Styled from './styles'

export const ProgressBar = ({ exercises, users }) => {
  const userId = localStorage.getItem('userId')
  const userExercises = users ? users[userId] || Array(exercises.length).fill(0) : Array(exercises.length).fill(0)

  // console.log(users)
  // console.log(userId)

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

  // console.log(numbers)
  // console.log(extractedText)
  // console.log(userExercises)

  return (
    <Styled.ProgressBox>
      <Styled.ProgressTitle>Мой прогресс по тренировке:</Styled.ProgressTitle>
      <Styled.ProgressBoxRange>
        {extractedText.map((ex, index) => {
          const num = userExercises[index] || 0
          return (
            <Styled.ProgressItem key={index}>
              <Styled.LabelProgress>{ex}</Styled.LabelProgress>
              <Styled.ProgressWidth>
                <Styled.ContainerProgressBar1
                  key={index}
                  progressWidth={calculateProgressBarWidth(num, numbers[index])}
                >
                  <Styled.ProgressBar1 type='range' min='0' max={numbers[index]} value={num} readOnly />
                  <Styled.PercentageLabel>{Math.round((num / numbers[index]) * 100)}%</Styled.PercentageLabel>
                </Styled.ContainerProgressBar1>
              </Styled.ProgressWidth>
            </Styled.ProgressItem>
          )
        })}
      </Styled.ProgressBoxRange>
    </Styled.ProgressBox>
  )
}
