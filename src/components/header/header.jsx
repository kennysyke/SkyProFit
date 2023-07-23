import React from 'react'
import { Button } from '../headerButton/button'
import * as Styled from './styles'
import { Logo } from '../logo/logo'
import { HeaderUser } from '../headerUser/headerUser'
import { selectToken } from '../../redux/slices/userSlice'
import { useSelector } from 'react-redux'

export function Header() {
  const token = useSelector(selectToken)

  return (
    <Styled.HeaderContainer>
      <Logo />
      {token ? <HeaderUser /> : <Button />}
    </Styled.HeaderContainer>
  )
}
