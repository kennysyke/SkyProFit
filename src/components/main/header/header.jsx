import React from 'react';
import { Logo } from './logo';
import { Button } from './button';
import * as Styled from "../styles";

export function Header() {
  const isMainPage = window.location.pathname === "/";
  return (
    <Styled.HeaderContainer>
      <Logo src= {isMainPage ? "images/icons/logo.svg" : "images/icons/logo-black.svg"}   />
      {isMainPage ? <Button/> : ''}     
    </Styled.HeaderContainer>
  );
}