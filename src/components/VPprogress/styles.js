import styled from 'styled-components'

export const ProgressBox = styled.div`
  flex: 1 1 0;
  border-radius: 30px;
  background: #f2f2f2;
  padding: 36px 55px 32px 44px;
`

export const ProgressTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 40px;
  text-align: center;
`

export const ProgressBoxRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`

export const LabelProgress = styled.label`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  flex: 1;
`

export const ProgressItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 27px;
`

export const ProgressWidth = styled.div`
  flex: 1;
  min-width: 120px;
`

export const ContainerProgressBar1 = styled.div`
  position: relative;
  border-radius: 22px;
  border: 2px solid #565eef;
  background: #edecff;
  height: 36px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    background: #565eef;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progressWidth};
  }
  ${(props) =>
    props.progressItem1 &&
    `
    border-color: #ff6d00;
      background: #FFF2E0;
      ::before {
        background: #ff6d00;
      }
  `}
  ${(props) =>
    props.progressItem2 &&
    `
    border-color: #9a48f1;
    background: #f9ebff;
    &::before {
      background: #9a48f1;
    }
  `}
  ${(props) =>
    props.progressItem3 &&
    `
    border-color: #bcec30;
    background: #ebffab;
    ::before {
      background: #bcec30;
    }
  `}
  ${(props) =>
    props.progressItem4 &&
    `
    border-color: #38BCED;
    background: #6FE4FF;
    ::before {
      background: #38BCED;
    }
  `}
`

export const ProgressBar1 = styled.input`
  opacity: 0%;
`

export const PercentageLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: black;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
`
