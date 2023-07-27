import styled from 'styled-components'

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const BtnUp = styled.button`
  display: inline-flex;
  padding: 7px 24px 9px 24px;
  justify-content: center;
  align-items: center;
  width: 140px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  background-color: #c7e957;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transform: translate(20%, -170%);
  transition: opacity 0.35s ease;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
    background-color: #daf289;
  }

  &:active {
    background-color: #ebffab;
  }
`
