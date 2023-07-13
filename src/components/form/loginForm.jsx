import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { Logo } from "../main/header/logo";
import { ButtonForm } from "./ButtonForm"


export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  function handleRegistration() {
    navigate("/registration");
  }

  return (
    <Styled.ContainerLoginForm>
      <Styled.LoginForms>
      <Logo/>
        <Styled.LoginInput type="email" placeholder="Email" />
        <Styled.PasswordInput type="password" placeholder="Пароль" />
        <Styled.Navigation>
          <ButtonForm onClick={handleLogin} text="Войти"/>
          <Styled.BtnRegistration onClick={handleRegistration}>
            Зарегистрироваться
          </Styled.BtnRegistration>
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  );
};
