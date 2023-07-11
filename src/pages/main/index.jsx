import { Center } from "../../components/main/center";
import { Header } from "../../components/main/header/header";
import { Title } from "../../components/main/title";
import * as Styled from "./styles";

export const MainPage = () => {     
    return (
      <Styled.StyledContainer>
        <Header />
        <Title />
        <Center />
      </Styled.StyledContainer>
    );
  }