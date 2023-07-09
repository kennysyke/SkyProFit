import React from 'react';
import { Logo } from './logo';
import { Button } from './button';
import * as Styled from "../styles";

export function Header() {
  const isMainPage = window.location.pathname === "/";
  return (
    <Styled.HeaderContainer>
      <Logo/>
      {isMainPage ? <Button/> : ''}     
    </Styled.HeaderContainer>
  );
}