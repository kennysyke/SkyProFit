import { Link } from 'react-router-dom'
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
  width: 100%;
  position: relative;
  padding: 36px 50px 44px;
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

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 25px;
  font-family: 'StratosSkyeng', sans-serif;
  font-style: normal;
  font-weight: 400;
  background: none;
  border: none;
`

export const Scroll = styled.div`
  width: 100%;
  max-width: 307px;
  margin: 0 auto;
  padding-right: 24px;
  padding-left: 24px;
  height: 460px;
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

export const WorkoutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const WorkoutItemBase = styled(Link)`
  position: relative;
  flex-basis: 76px;
  border-radius: 26px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  letter-spacing: -0.05px;
  padding: 11px 28px 17px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`

export const WorkoutItem = styled(WorkoutItemBase)`
  border: 1px solid black;
  color: black;
  font-size: 20px;
`

export const WorkoutItemFull = styled(WorkoutItemBase)`
  border: 1px solid #06b16e;
  color: #06b16e;
  font-size: 20px;

  ::before {
    content: '';
    display: block;
    width: 28px;
    height: 26px;
    background-image: url(/images/icons/check.svg);
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 4px;
  }
`
