import * as Styled from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/slices/userSlice'
import { ButtonForm } from '../buttonForm/ButtonForm'
import { Logo } from '../logo/logo'

export const RegistrationForm = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [rePassword, setRePassword] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegistration = () => {
    if (password !== rePassword) {
      alert('Пароли не совпадают')
      return
    }
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        )
        if (user) {
          navigate('/login')
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
  return (
    <Styled.ContainerLoginForm>
      <Styled.LoginForms>
        <Logo />
        <Styled.LoginInput type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <Styled.PasswordInput type='password' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
        <Styled.PasswordInputRep
          type='password'
          placeholder='Повторите Пароль'
          onChange={(e) => setRePassword(e.target.value)}
        />
        <Styled.Navigation>
          <ButtonForm text='Зарегистрироваться' onClick={handleRegistration} />
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  )
}
