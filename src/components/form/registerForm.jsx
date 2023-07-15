import * as Styled from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../../redux/slices/userSlice"
import { Logo } from "../main/header/logo";
import { ButtonForm } from "./ButtonForm"

export const RegistrationForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 
  const navigate = useNavigate(); 
  const dispatch = useDispatch()

  const handleRegistration = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);

      dispatch(setUser({
        email:user.email,
        id: user.uid,
        token: user.accessToken

      }))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
    });
    navigate('/login')
  }
  return (
    <Styled.ContainerLoginForm>
      <Styled.LoginForms>
      <Logo/>
        <Styled.LoginInput 
        type="email" 
        placeholder="Email"        
        onChange={(e) => setEmail(e.target.value)} />
        <Styled.PasswordInput 
        type="password" 
        placeholder="Пароль"         
        onChange={(e) => setPassword(e.target.value)}/>
        <Styled.PasswordInputRep
          type="password"
          placeholder="Повторите Пароль"
        />
        <Styled.Navigation>
        <ButtonForm text="Зарегистрироваться" onClick={handleRegistration}/>
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  );
};
