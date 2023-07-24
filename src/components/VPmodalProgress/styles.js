import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  width: 444px;
  height: 554px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

export const ModalHeader = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 30px;
`

export const ModalQuestion = styled.label`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 361px;
  padding-bottom: 20px;
`

export const ModalInput = styled.input`
  width: 361px;
  height: 35px;
  border: none;
  border-bottom: 1px solid rgb(208, 206, 206);
  margin-bottom: 38px;
  padding-bottom: 8px;
  ::placeholder {
    color: #e1e1e1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`

export const ModalButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 46px;
  color: white;
  background: #580ea2;
`
