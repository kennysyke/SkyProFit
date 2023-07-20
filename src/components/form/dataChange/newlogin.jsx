import React from "react";
import * as Styled from "./styles";
import { Logo } from "../../Logo/Logo";


export function Newlogin() {
  return (
    <Styled.ContainerForm>
      <Styled.NewLoginForm>
        <Logo /> 
        <Styled.LabelForm>Новый логин</Styled.LabelForm>
        <Styled.LoginInput type="login" placeholder="Логин" />
        <Styled.BtnSave>Сохранить</Styled.BtnSave>
      </Styled.NewLoginForm>
    </Styled.ContainerForm>
  );
}
