import React from 'react'
import { Button } from '../headerButton/button'
import * as Styled from './styles'
import { Logo } from '../logo/logo'
import { HeaderUser } from '../headerUser/headerUser'

export function Header() {
  const token = localStorage.getItem('token')
  const email = localStorage.getItem('userEmail')

  return (
    <Styled.HeaderContainer>
      <Logo />
      {token && email ? <HeaderUser /> : <Button />}
    </Styled.HeaderContainer>
  )
}
