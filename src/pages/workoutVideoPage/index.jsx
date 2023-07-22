import { Header } from '../../components/headerHeader/header'
import { Player } from '../../components/VPplayer/Player'
import { Exercises } from '../../components/VPexercises/exercises'
import { ProgressBar } from '../../components/VPprogress/progress'
import * as Styled from './styles'

import { useGetWorkoutsQuery } from '../../redux/workoutsApi'
import { useParams } from 'react-router-dom'

export const WorkoutVideoPage = () => {
  const { data, isLoading } = useGetWorkoutsQuery()
  const params = useParams()

  if (isLoading) {
    console.log(`Идет подгрзука данных`)
  }
  const workouts = Object.values(data)
  const workout = workouts.find((w) => w._id === params.workoutid)

  console.log(workouts)

  console.log(workout.source)

  return (
    <Styled.StyledContainer>
      <Header />
      <Styled.VideoTitleBlock>
        <Styled.VideoTitle>Йога</Styled.VideoTitle>
        <Styled.VideoSubTitle>{workout.name}</Styled.VideoSubTitle>
      </Styled.VideoTitleBlock>
      <Player source={workout.source} />
      <Styled.ExercisesProgressBox>
        <Exercises exercises={workout.exercises} />
        <ProgressBar exercises={workout.exercises} />
      </Styled.ExercisesProgressBox>
    </Styled.StyledContainer>
  )
}
