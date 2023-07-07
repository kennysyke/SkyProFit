import React from 'react';
import logo from "../../images/icons/logo.svg"
import logoBlack from "../../images/icons/logo-black.svg";
import * as Styled from "./styles";

export function Header() {
  const isMainPage = window.location.pathname === "/";
  return (
    <Styled.HeaderContainer>
      <Styled.Logo src={isMainPage ? logo : logoBlack} alt="logo" />
      <Styled.BtnLogin to="/login">Войти</Styled.BtnLogin>
    </Styled.HeaderContainer>
  );
}