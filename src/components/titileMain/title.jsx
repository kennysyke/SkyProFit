import React from 'react'
import * as Styled from './styles'

export function Title() {
  return (
    <Styled.TitleContainer>
      <Styled.TitleSmall>Онлайн-тренировки для занятий дома</Styled.TitleSmall>
      <Styled.TitleDiv>
        <Styled.TitleLarge>Начните заниматься спортом и улучшите качество жизни</Styled.TitleLarge>
        <Styled.StickerImage src='/images/main-page-sticker.png' alt='Sticker image' />
      </Styled.TitleDiv>
    </Styled.TitleContainer>
  )
}
