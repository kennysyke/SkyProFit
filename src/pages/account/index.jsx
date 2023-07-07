import {Profile} from "../../components/profile/profile";

import styled from "styled-components";

const StyledContainer = styled.div`
  // width: 100%;
  // height: 100%;
  max-width: 1920px;
  margin: 0px auto;
`;




export const Account = () => {     
    return (
      <StyledContainer>
        <Profile/>   
      </StyledContainer>
    );
  }