import styled from 'styled-components'

export const NewPasForm = styled.div`
  width: 366px;
  height: 400px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const LabelForm = styled.div`
  width: 278.5px;
  height: 35px;
`

export const PasswordInput = styled.input`
  width: 278.5px;
  height: 35px;
  border: none;
  border-bottom: 1px solid #d0cece;
  margin-bottom: 60px;
  padding-bottom: 8px;

  &::placeholder {
    color: #e1e1e1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`

export const BtnSave = styled.button`
  width: 278px;
  height: 52px;
  background: #580ea2;
  border-radius: 46px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background: #3f007d;
    color: #ffffff;
    cursor: pointer;
  }

  &:active {
    background: #271a58;
    color: #ffffff;
    cursor: pointer;
  }
`
