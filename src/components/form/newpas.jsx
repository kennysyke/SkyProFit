import React from 'react';
import * as Styled from './Styles';

export function Newpas() {
  return (
        <Styled.ContainerForm>
            <Styled.NewDataForms>
                {/* <Logo image="img/logoBlack.png" /> */}
                <Styled.LabelForm>Новый пароль</Styled.LabelForm>
                <Styled.PasswordInput 
                type="password"
                placeholder="Пароль"/>
                 <Styled.PasswordInput 
                type="password"
                placeholder="Повторите пароль"/>
                    <Styled.BtnSave>
                        Сохранить
                    </Styled.BtnSave>
            </Styled.NewDataForms>
        </Styled.ContainerForm>
  )
}
