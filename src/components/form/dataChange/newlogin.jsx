import React from "react";
import * as Styled from "./styles";
import { Logo } from "../../Logo/Logo";
import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth";
import { useState } from "react";

export function Newlogin() {
  const [login, setLogin] = useState() 
  
const reLogin = () => {
  const auth = getAuth();

  updateEmail(auth.currentUser, login).then(() => {

    onAuthStateChanged(auth, (user) => {        
    console.log(user)      

});
  }).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    if (errorCode) {
      alert(errorMessage)
      return
    }
  });



    
}
  return (
    <Styled.ContainerForm>
      <Styled.NewLoginForm>
        <Logo /> 
        <Styled.LabelForm>Новый логин</Styled.LabelForm>
        <Styled.LoginInput 
        type="login"
        placeholder="Логин"
        onChange={(e) => setLogin(e.target.value)} />
        <Styled.BtnSave
        onClick={reLogin}>Сохранить</Styled.BtnSave>
      </Styled.NewLoginForm>
    </Styled.ContainerForm>
  );
}
