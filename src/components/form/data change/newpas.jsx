import React from "react";
import * as Styled from "./Styles";
import { Logo } from "../../main/header/logo";

export function Newpas() {
  return (
    <Styled.ContainerForm>
      <Styled.NewPasForm>
        <Logo/>
        <Styled.LabelForm>Новый пароль</Styled.LabelForm>
        <Styled.PasswordInput type="password" placeholder="Пароль" />
        <Styled.PasswordInput type="password" placeholder="Повторите пароль" />
        <Styled.BtnSave>Сохранить</Styled.BtnSave>
      </Styled.NewPasForm>
    </Styled.ContainerForm>
  );
}
