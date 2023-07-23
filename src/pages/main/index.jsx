import { Center } from '../../components/centerMain/center'
import { Header } from '../../components/headerHeader/header'
import { Title } from '../../components/titileMain/title'
import * as Styled from './styles'

export const MainPage = () => {
  return (
    <Styled.StyledContainer>
      <Header />
      <Title />
      <Center />
    </Styled.StyledContainer>
  )
}
