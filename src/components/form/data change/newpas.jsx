import React from "react";
import * as Styled from "./Styles";
import logoBlack from "../../../images/icons/logo-black.svg";

export function Newpas() {
  return (
    <Styled.ContainerForm>
      <Styled.NewPasForm>
        <Styled.Logo src={logoBlack} alt="logo" />
        <Styled.LabelForm>Новый пароль</Styled.LabelForm>
        <Styled.PasswordInput type="password" placeholder="Пароль" />
        <Styled.PasswordInput type="password" placeholder="Повторите пароль" />
        <Styled.BtnSave>Сохранить</Styled.BtnSave>
      </Styled.NewPasForm>
    </Styled.ContainerForm>
  );
}
