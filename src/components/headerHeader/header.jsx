import React from 'react'
import { Button } from '../headerButton/button'
import * as Styled from './styles'
import { Logo } from '../logo/logo'

export function Header() {
  return (
    <Styled.HeaderContainer>
      <Logo />
      <Button />
    </Styled.HeaderContainer>
  )
}
