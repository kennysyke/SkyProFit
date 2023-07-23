import React from 'react'
import * as Styled from './styles'
import { CardsContainer } from '../cardContainerMain/cardsContainer'

export function Center() {
  const anchorHandler = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Styled.CenterContainer>
      <CardsContainer />
      <Styled.ButtonContainer>
        <Styled.BtnUp onClick={anchorHandler}>Наверх↑</Styled.BtnUp>
      </Styled.ButtonContainer>
    </Styled.CenterContainer>
  )
}
