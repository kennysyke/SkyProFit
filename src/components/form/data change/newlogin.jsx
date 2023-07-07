import React from "react";
import * as Styled from "./Styles";
import logoBlack from "../../../images/icons/logo-black.svg";

export function Newlogin() {
  return (
    <Styled.ContainerForm>
      <Styled.NewLoginForm>
        <Styled.Logo src={logoBlack} alt="logo" />
        <Styled.LabelForm>Новый логин</Styled.LabelForm>
        <Styled.LoginInput type="login" placeholder="Логин" />
        <Styled.BtnSave>Сохранить</Styled.BtnSave>
      </Styled.NewLoginForm>
    </Styled.ContainerForm>
  );
}
