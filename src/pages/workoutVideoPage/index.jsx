import { Player } from '../../components/VPplayer/Player'
import { Exercises } from '../../components/VPexercises/exercises'
import { ProgressBar } from '../../components/VPprogress/progress'
import * as Styled from './styles'

import { useGetWorkoutsQuery } from '../../redux/workoutsApi'
import { useGetCoursesQuery } from '../../redux/fitnesApiBase'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/header/header'

export const WorkoutVideoPage = () => {
  const { data, isLoading } = useGetWorkoutsQuery()
  const { data: dataCourses, isLoading: isLoadingCourses } = useGetCoursesQuery()
  const params = useParams()

  if (isLoading || isLoadingCourses) {
    return <h1>Идет подгрузка данных</h1>
  }

  const courses = Object.values(dataCourses)
  const workouts = Object.values(data)

  const activeWorkout = workouts.find((w) => w._id === params.workoutid)
  const activeCourse = courses.find((el) => el.workout.includes(activeWorkout._id))

  // console.log(activeWorkout)
  // console.log(activeCourse)

  return (
    <Styled.StyledContainer>
      <Header />
      <Styled.VideoTitleBlock>
        <Styled.VideoTitle>{activeCourse.name}</Styled.VideoTitle>
        <Styled.VideoSubTitle>{activeWorkout.name}</Styled.VideoSubTitle>
      </Styled.VideoTitleBlock>
      <Player source={activeWorkout.source} />
      <Styled.ExercisesProgressBox>
        {activeWorkout.exercises ? <Exercises exercises={activeWorkout.exercises} users={activeWorkout.users} /> : ''}
        {activeWorkout.exercises ? <ProgressBar exercises={activeWorkout.exercises} users={activeWorkout.users} /> : ''}
      </Styled.ExercisesProgressBox>
    </Styled.StyledContainer>
  )
}
