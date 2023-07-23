import * as Styled from './styles'

export const ButtonForm = ({ onClick, text }) => {
  return <Styled.BtnEnter onClick={onClick}>{text}</Styled.BtnEnter>
}
