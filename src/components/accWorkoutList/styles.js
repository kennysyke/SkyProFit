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

export const CloseButton = styled.button`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background: white;
  padding: 2px;
  border: none;
`

export const WorkoutList = styled.div`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const WorkoutItem = styled.div`
  width: 278px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 26px;
  border: 1px solid black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.016px;
  padding-left: 10px;
`
