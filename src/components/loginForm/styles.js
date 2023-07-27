import Styled from 'styled-components'

export const LoginForms = Styled.div`
    width: 366px;
    height: 439px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export const LoginInput = Styled.input`
    width: 278px;
    height: 35px;
    border: none;
    border-bottom: 1px solid rgb(208, 206, 206);
    margin-bottom: 38px;
    font-size: 18px;
    padding-left: 5px;
    padding-right: 5px;
    
    &::placeholder {       
        color: #E1E1E1;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    }
`

export const PasswordInput = Styled.input`
    width: 278px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #D0CECE;;
    margin-bottom: 60px;
    font-size: 18px;
    padding-left: 5px;
    padding-right: 5px;
    &::placeholder {       
        color: #E1E1E1;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    }
`

export const Navigation = Styled.nav`
    display: flex;
    flex-direction: column;
`

export const BtnRegistration = Styled.button`
    width: 278px;
    height: 52px;
    border: 1px solid #d0cece;
    background: #ffffff;
    border-radius: 46px;
    margin-bottom: 47px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`
