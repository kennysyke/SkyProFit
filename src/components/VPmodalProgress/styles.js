import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  padding: 36px 42px 44px;
  border-radius: 12px;
  background: #fff;
  max-width: 444px;
  min-height: 626px;
`

export const ModalHeader = styled.h3`
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 40px;
`

export const Scroll = styled.div`
  padding-right: 24px;
  height: 365px;
  overflow: auto;

  scrollbar-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.05);
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.15);
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.05);
  }
`

export const ModalQuestion = styled.label`
  color: #000;
  display: block;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  padding-bottom: 20px;
`

export const ModalInput = styled.input`
  display: block;
  width: 100%;
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
  display: block;
  margin: 40px auto 0 auto;
  height: 52px;
  background: #580ea2;
  border-radius: 46px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`
