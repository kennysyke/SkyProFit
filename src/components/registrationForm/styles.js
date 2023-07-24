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
  padding-bottom: 8px;
  ::placeholder {       
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
  padding-bottom: 8px;

  &::placeholder {       
    color: #E1E1E1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`
export const PasswordInputRep = Styled.input`
  width: 278px;
  height: 35px;
  border: none;
  border-bottom: 1px solid #D0CECE;;
  margin-bottom: 60px;
  padding-bottom: 8px;

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
