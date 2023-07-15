import React from "react";
import * as Styled from "./styles";
import { useDispatch } from "react-redux";
import {
  setInput1,
  setInput2,
  setInput3,
  resetInputs,
} from "../../redux/slices/modal-store";

export const ModalWindow = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    onClose();
  };

  const handleInputChange = (e, inputName) => {
    const inputValue = e.target.value;

    switch (inputName) {
      case "input1":
        dispatch(setInput1(inputValue));
        break;
      case "input2":
        dispatch(setInput2(inputValue));
        break;
      case "input3":
        dispatch(setInput3(inputValue));
        break;
      default:
        break;
    }
  };

  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>Мой прогресс</Styled.ModalHeader>
        <Styled.ModalQuestion htmlFor="input1">
          Сколько раз вы сделали наклоны вперед?
        </Styled.ModalQuestion>
        <Styled.ModalInput
          type="text"
          id="input1"
          placeholder="Введите значение"
          onChange={(e) => handleInputChange(e, "input1")}
        />
        <Styled.ModalQuestion htmlFor="input2">
          Сколько раз вы сделали наклоны назад?
        </Styled.ModalQuestion>
        <Styled.ModalInput
          type="text"
          id="input2"
          placeholder="Введите значение"
          onChange={(e) => handleInputChange(e, "input2")}
        />
        <Styled.ModalQuestion htmlFor="input3">
          Сколько раз вы сделали поднятие ног, согнутых в коленях?
        </Styled.ModalQuestion>
        <Styled.ModalInput
          type="text"
          id="input3"
          placeholder="Введите значение"
          onChange={(e) => handleInputChange(e, "input3")}
        />
        <Styled.ModalButton onClick={handleSubmit} id="submitBtn">
          Отправить
        </Styled.ModalButton>
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
};
