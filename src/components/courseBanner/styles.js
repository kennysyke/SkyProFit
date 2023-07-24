import styled from 'styled-components'

export const Pic = styled.div`
  height: 310px;
  padding: 30px 50% 30px 30px;
  background-color: #faf9fa;
  background-repeat: no-repeat;
  background-position: 90% 70%;
  border-radius: 30px;
  background-image: url(/images/courses/${(props) => props.src});
`

export const Name = styled.div`
  font-size: 64px;
  font-weight: 400;
  font-style: normal;
  line-height: 72px;
  letter-spacing: -0.8px;
`
