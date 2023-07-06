import React from 'react';
import * as Styled from './Styles';


export function Newlogin() {
  return (
    <Styled.ContainerForm>
        <Styled.NewDataForms>
            {/* <Logo image="img/logoBlack.png" /> */}
            <Styled.LabelForm>Новый логин</Styled.LabelForm>
            <Styled.LoginInput 
            type="login"
            placeholder="Логин"/>
                <Styled.BtnSave>
                    Сохранить
                </Styled.BtnSave>
        </Styled.NewDataForms>
    </Styled.ContainerForm>


)
}
