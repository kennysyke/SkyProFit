import { CourseDescription } from '../../components/courseDescription/courseDescription'
import { Header } from '../../components/header/header'
import * as Styled from './styles'

export const CourseUnauth = () => {
  return (
    <Styled.CourseUnauthContent>
      <Header />
      <CourseDescription />
    </Styled.CourseUnauthContent>
  )
}
