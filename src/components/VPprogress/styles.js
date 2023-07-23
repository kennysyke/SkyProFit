import styled from 'styled-components'

export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 638px;
  height: 336px;
  border-radius: 30px;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
`

export const ProgressTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 40px;
`

export const ProgressBoxRange = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const LabelProgress = styled.label`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContainerProgressBar1 = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 22px;
  border: 2px solid #565eef;
  background: #edecff;
  height: 36px;
  width: 278px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progressWidth};
    background: #565eef;
  }
`

export const ProgressBar1 = styled.input`
  opacity: 0%;
`

export const PercentageLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: white;
`
