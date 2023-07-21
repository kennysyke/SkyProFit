import React from "react";
import * as Styled from "./styles";

export const ModalOk = () => {
  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>Ваш прогресс засчитан!</Styled.ModalHeader>
        <Styled.Image src="/images/ok-hand.png" alt="ok-hand" />
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
};
