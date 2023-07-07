import { Center } from "../../components/main/center";
import { Header } from "../../components/main/header";
import { Title } from "../../components/main/title";

import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainPage = () => {     
    return (
      <StyledContainer>
        <Header />
        <Title />
        <Center />
      </StyledContainer>
    );
  }