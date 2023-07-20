import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/slices/userSlice'
import { ButtonForm } from './ButtonForm'
import { Logo } from '../Logo/Logo'

export const LoginForm = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        if (user) {
          navigate('/account')
        }
        return
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

  function handleRegistration() {
    navigate('/registration')
  }

  return (
    <Styled.ContainerLoginForm>
      <Styled.LoginForms>
        <Logo />
        <Styled.LoginInput
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Styled.PasswordInput
          type='password'
          placeholder='Пароль'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Styled.Navigation>
          <ButtonForm onClick={handleLogin} text='Войти' />
          <Styled.BtnRegistration onClick={handleRegistration}>
            Зарегистрироваться
          </Styled.BtnRegistration>
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  )
}
