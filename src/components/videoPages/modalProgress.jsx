import React from "react";
import * as Styled from "./styles";

export const ModalWindow = () => {
  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>Мой прогресс</Styled.ModalHeader>
        <Styled.ModalQuestion for="input1">
          Сколько раз вы сделали наклоны вперед?
        </Styled.ModalQuestion>
        <Styled.ModalInput type="text" id="input1" />
        <Styled.ModalQuestion for="input2">
          Сколько раз вы сделали наклоны назад?
        </Styled.ModalQuestion>
        <Styled.ModalInput type="text" id="input2" />
        <Styled.ModalQuestion for="input3">
          Сколько раз вы сделали поднятие ног, согнутых в коленях?
        </Styled.ModalQuestion>
        <Styled.ModalInput type="text" id="input3" />
        <Styled.ModalButton id="submitBtn">Отправить</Styled.ModalButton>
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
};
