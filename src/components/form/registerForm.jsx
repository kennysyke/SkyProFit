
import * as Styled from './StylesForm';


export const RegistrationForm = () => {   

    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                {/* <Logo image="img/logoBlack.png" /> */}
                <Styled.LoginInput 
                type="email" 
                placeholder="Email" />
                <Styled.PasswordInput
                type="password"
                placeholder="Пароль" />
                <Styled.PasswordInputRep 
                type="password"
                placeholder="Повторите Пароль" />
                <Styled.Navigation>
                    <Styled.BtnEnter>                        
                            Зарегистрироваться                        
                    </Styled.BtnEnter>
                </Styled.Navigation>
            </Styled.LoginForms>
        </Styled.ContainerLoginForm>
    );
};