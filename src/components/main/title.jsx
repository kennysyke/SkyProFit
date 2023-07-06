import React from 'react';
import * as Styled from "./styles";
import stickerImage from "../../images/main-page-sticker.png";
export function Title() {
  return (
    <Styled.TitleContainer>
      <Styled.TitleSmall>Онлайн-тренировки для занятий дома</Styled.TitleSmall>
      <Styled.TitleDiv>
        <Styled.TitleLarge>
          Начните заниматься спортом и улучшите качество жизни
        </Styled.TitleLarge>
        <Styled.StickerImage src={stickerImage} alt="Sticker image" />
      </Styled.TitleDiv>
    </Styled.TitleContainer>
  );
}