import React from 'react'
import * as Styled from './styles'
import { Logo } from '../logo/Logo'
import { getAuth, updatePassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Newpas() {
  const [pass, setPass] = useState()
  const [rePass, setRePass] = useState()
  const navigate = useNavigate()

  const rePassword = () => {
    if (pass !== rePass) {
      alert('Пароли не совпадают')
      return
    }
    const auth = getAuth()
    const user = auth.currentUser
    const newPassword = pass

    updatePassword(user, newPassword)
      .then(() => {
        localStorage.setItem('userPassword', newPassword)
        navigate('/account')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode) {
          alert(errorMessage)
          return
        }
      })
  }
  return (
    <Styled.ContainerForm>
      <Styled.NewPasForm>
        <Logo />
        <Styled.LabelForm>Новый пароль</Styled.LabelForm>
        <Styled.PasswordInput type='password' placeholder='Пароль' onChange={(e) => setPass(e.target.value)} />
        <Styled.PasswordInput
          type='password'
          placeholder='Повторите пароль'
          onChange={(e) => setRePass(e.target.value)}
        />
        <Styled.BtnSave onClick={rePassword}>Сохранить</Styled.BtnSave>
      </Styled.NewPasForm>
    </Styled.ContainerForm>
  )
}
