import React from 'react'
import * as Styled from './styles'
import { Logo } from '../logo/Logo'
import { getAuth, onAuthStateChanged, updateEmail } from 'firebase/auth'
import { setUser } from '../../redux/slices/userSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Newlogin() {
  const [login, setLogin] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const reLogin = () => {
    const auth = getAuth()
    updateEmail(auth.currentUser, login)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            }),
          )
          navigate('/account')
        })
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
      <Styled.NewLoginForm>
        <Logo />
        <Styled.LabelForm>Новый логин</Styled.LabelForm>
        <Styled.LoginInput type='login' placeholder='Логин' onChange={(e) => setLogin(e.target.value)} />
        <Styled.BtnSave onClick={reLogin}>Сохранить</Styled.BtnSave>
      </Styled.NewLoginForm>
    </Styled.ContainerForm>
  )
}
