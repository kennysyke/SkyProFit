import { Header } from "../../components/main/header/header";
import { Player } from "../../components/videoPages/Player";
import { Exercises } from "../../components/videoPages/exercises";
import { ProgressBar } from "../../components/videoPages/progress";
import * as Styled from "./styles";

export const WorkoutVideoPage = () => {     
    return (
      <div>
        <Header/> 
        <Styled.VideoTitleBlock>
        <Styled.VideoTitle>Йога</Styled.VideoTitle>
        <Styled.VideoSubTitle>Красота и здоровье / Йога на каждый день / 2 день</Styled.VideoSubTitle>
        </Styled.VideoTitleBlock>
        <Player/>
        <Styled.ExercisesProgressBox>
        <Exercises/>
        <ProgressBar/>
        </Styled.ExercisesProgressBox>
      </div>
    );
  }