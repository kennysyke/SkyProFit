import { useNavigate } from "react-router-dom";
import * as Styled from "./Styles";
import logoBlack from "../../images/icons/logo-black.svg";

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
        <Styled.Logo src={logoBlack} alt="logo" />
        <Styled.LoginInput type="email" placeholder="Email" />
        <Styled.PasswordInput type="password" placeholder="Пароль" />
        <Styled.Navigation>
          <Styled.BtnEnter onClick={handleLogin}>Войти</Styled.BtnEnter>
          <Styled.BtnRegistration onClick={handleRegistration}>
            Зарегистрироваться
          </Styled.BtnRegistration>
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  );
};
