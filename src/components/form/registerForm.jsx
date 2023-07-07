import * as Styled from "./Styles";
import logoBlack from "../../images/icons/logo-black.svg";

export const RegistrationForm = () => {
  return (
    <Styled.ContainerLoginForm>
      <Styled.LoginForms>
        <Styled.Logo src={logoBlack} alt="logo" />
        <Styled.LoginInput type="email" placeholder="Email" />
        <Styled.PasswordInput type="password" placeholder="Пароль" />
        <Styled.PasswordInputRep
          type="password"
          placeholder="Повторите Пароль"
        />
        <Styled.Navigation>
          <Styled.BtnEnter>Зарегистрироваться</Styled.BtnEnter>
        </Styled.Navigation>
      </Styled.LoginForms>
    </Styled.ContainerLoginForm>
  );
};
