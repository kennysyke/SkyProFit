import * as Styled from "./styles";
import { Logo } from "../main/header/logo";
import { ButtonForm } from "./ButtonForm"

export const RegistrationForm = () => {
  return (
    <Styled.ContainerLoginForm>
      <Styled.LoginForms>
      <Logo/>
        <Styled.LoginInput type="email" placeholder="Email" />
        <Styled.PasswordInput type="password" placeholder="Пароль" />
        <Styled.PasswordInputRep
          type="password"
          placeholder="Повторите Пароль"
        />
        <Styled.Navigation>
        <ButtonForm text="Зарегистрироваться"/>
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  );
};
