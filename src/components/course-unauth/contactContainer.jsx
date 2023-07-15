import React from 'react';
import * as Styled from "./styles";

export function ContactContainer() {
  return (    
    <Styled.ContactContainer>
    <Styled.LeftContainer>
      <Styled.ContactText>
        Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
        выбором направления и тренера, с которым тренировки принесут
        здоровье и радость!
      </Styled.ContactText>
      <Styled.ContactBtn>Записаться на тренировку</Styled.ContactBtn>
    </Styled.LeftContainer>
    <div>
      <Styled.ContactImage src="\images\phone.png" alt="phone in the hand" />
    </div>
  </Styled.ContactContainer>     
  );
}