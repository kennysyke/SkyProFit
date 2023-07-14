import React from 'react';
// import { CourseBanner } from './courseBanner';

import * as Styled from "./styles";
import { getResponse } from '../API/API';
export function CourseDescription() {
  getResponse()
  return (
    <Styled.CourseContent>
      <Styled.CourseBannerContent>
        <Styled.TitleCard>Йога</Styled.TitleCard>
        {/* <CourseBanner src="images/courses-wide/skillcard.png" alt='Course card'/> */}
      </Styled.CourseBannerContent>
      <div>
        <Styled.TitleLarge>Подойдет для вас, если:</Styled.TitleLarge>
        <Styled.StyledOrderedList>
          <Styled.StyledListItem>
            Давно хотели попробовать йогу, но не решались начать.
          </Styled.StyledListItem>
          <Styled.StyledListItem>
            Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
          </Styled.StyledListItem>
          <Styled.StyledListItem>
            Ищете активность, полезную для тела и души.
          </Styled.StyledListItem>
        </Styled.StyledOrderedList>
      </div>
      <div>
        <Styled.TitleLarge>Направления:</Styled.TitleLarge>
        <Styled.StyledTwoColumnList>
          <Styled.TextListSmall>Йога для новичков</Styled.TextListSmall>
          <Styled.TextListSmall>Классическая йога</Styled.TextListSmall>
          <Styled.TextListSmall>Йогатерапия</Styled.TextListSmall>
          <Styled.TextListSmall>Кундалини-йога </Styled.TextListSmall>
          <Styled.TextListSmall>Хатха-йога</Styled.TextListSmall>
          <Styled.TextListSmall>Аштанга-йога</Styled.TextListSmall>
        </Styled.StyledTwoColumnList>
      </div>

      <div>
        <Styled.DetailsText>
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </Styled.DetailsText>
      </div>

      <Styled.ContactContainer>
        <Styled.LeftContainer>
          <Styled.ContactText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </Styled.ContactText>
          <Styled.ContactBtn>Записаться на тренировку</Styled.ContactBtn>
        </Styled.LeftContainer>
        <div>
          <Styled.ContactImage src="images/phone.png" alt="phone in the hand" />
        </div>
      </Styled.ContactContainer>
    </Styled.CourseContent>
  );
}