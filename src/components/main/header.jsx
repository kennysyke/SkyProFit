import React from 'react';
import logo from "../../images/icons/logo.svg"
import * as Styled from "./styles";

export function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.Logo src={logo} alt="logo" />
      <Styled.BtnLogin to="/login">Войти</Styled.BtnLogin>
    </Styled.HeaderContainer>
  );
}