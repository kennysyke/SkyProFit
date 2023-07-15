import React from 'react';
import * as Styled from "./styles";
import { CardsContainer } from './cardsContainer';


export function Center() {
  
  return (
    <Styled.CenterContainer>
      <CardsContainer/>
      <Styled.ButtonContainer>
        <Styled.BtnUp>Наверх↑</Styled.BtnUp>
      </Styled.ButtonContainer>
    </Styled.CenterContainer>
  );
}