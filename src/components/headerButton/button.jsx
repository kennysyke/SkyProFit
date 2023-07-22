import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styles'

export function Button() {
  return (
    <Link to='/login'>
      <Styled.BtnLogin>Войти</Styled.BtnLogin>
    </Link>
  )
}
