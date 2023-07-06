import { AppRoutes } from "../routes";

import styled from "styled-components";

const StyledWrapper = styled.div`
  background: #271a58;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-left: calc(50% - 720px);
  padding-right: calc(50% - 720px);
`;

export function App() {
  return (
    <StyledWrapper>
      <AppRoutes />
    </StyledWrapper>
  );
}


