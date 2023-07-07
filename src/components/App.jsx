import { AppRoutes } from "../routes";

import styled from "styled-components";

const StyledWrapper = styled.div`
  background: ${(props) => (props.isMainPage ? "#271a58" : "white")};
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-left: calc(50% - 720px);
  padding-right: calc(50% - 720px);
`;

export function App() {
  const isMainPage = window.location.pathname === "/";
  return (
    <StyledWrapper isMainPage={isMainPage}>
      <AppRoutes />
    </StyledWrapper>
  );
}