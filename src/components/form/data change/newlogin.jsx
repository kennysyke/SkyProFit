import React from "react";
import * as Styled from "./Styles";
import { Logo } from "../../main/header/logo";


export function Newlogin() {
  return (
    <Styled.ContainerForm>
      <Styled.NewLoginForm>
        <Logo/> 
        <Styled.LabelForm>Новый логин</Styled.LabelForm>
        <Styled.LoginInput type="login" placeholder="Логин" />
        <Styled.BtnSave>Сохранить</Styled.BtnSave>
      </Styled.NewLoginForm>
    </Styled.ContainerForm>
  );
}
