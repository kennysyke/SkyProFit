import { Header } from "../../components/main/header/header";
import { Player } from "../../components/videoPages/Player";
import { Exercises } from "../../components/videoPages/exercises";
import { ProgressBar } from "../../components/videoPages/progress";
import * as Styled from "./styles";

import { useGetWorkoutsQuery } from "../../redux/workoutsApi";
import { useParams } from "react-router-dom";

export const WorkoutVideoPage = () => {
  const { data, isLoading } = useGetWorkoutsQuery();
  const params = useParams();

  if (isLoading) {
    return <h1>Идет подгрзука данных</h1>;
  }
  const workouts = Object.values(data);
  const workout = workouts.find((w) => w._id === params.workoutid);

  console.log(workouts);

  console.log(workout);

  return (
    <Styled.StyledContainer>
      <Header />
      <Styled.VideoTitleBlock>
        <Styled.VideoTitle>Йога</Styled.VideoTitle>
        <Styled.VideoSubTitle>
          Красота и здоровье / Йога на каждый день / 2 день
        </Styled.VideoSubTitle>
      </Styled.VideoTitleBlock>
      <Player />
      <Styled.ExercisesProgressBox>
        <Exercises />
        <ProgressBar />
      </Styled.ExercisesProgressBox>
    </Styled.StyledContainer>
  );
};