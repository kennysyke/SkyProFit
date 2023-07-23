import { Header } from '../../components/header/header'
import { Profile } from '../../components/profile/profile'
import * as Styled from './styles'

export const Account = () => {
  return (
    <Styled.Container>
      <Header />
      <Profile />
    </Styled.Container>
  )
}
