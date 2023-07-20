import React from 'react';
import { Button } from './button';
import * as Styled from "../styles";
import { Logo } from '../../Logo/Logo';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <Logo />
      <Button/>
    </Styled.HeaderContainer>
  );
}