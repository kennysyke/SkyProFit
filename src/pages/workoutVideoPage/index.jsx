import { Player } from '../../components/VPplayer/Player'
import { Exercises } from '../../components/VPexercises/exercises'
import { ProgressBar } from '../../components/VPprogress/progress'
import * as Styled from './styles'

import { useGetWorkoutsQuery } from '../../redux/workoutsApi'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/header/header'

export const WorkoutVideoPage = () => {
  const { data, isLoading } = useGetWorkoutsQuery()
  const params = useParams()

  if (isLoading) {
   return <h1>Идет подгрузка данных</h1>
  }

  const workouts = Object.values(data)
  const workout = workouts.find((w) => w._id === params.workoutid)
 
  return (
    <Styled.StyledContainer>
      <Header />
      <Styled.VideoTitleBlock>
        <Styled.VideoTitle>Йога</Styled.VideoTitle>
        <Styled.VideoSubTitle>{workout.name}</Styled.VideoSubTitle>
      </Styled.VideoTitleBlock>
      <Player source={workout.source} />
      <Styled.ExercisesProgressBox>
        {workout.exercises ? <Exercises exercises={workout.exercises} />: ''}
        {workout.exercises ? <ProgressBar exercises={workout.exercises} />: ''}
      </Styled.ExercisesProgressBox>
    </Styled.StyledContainer>
  )
}
