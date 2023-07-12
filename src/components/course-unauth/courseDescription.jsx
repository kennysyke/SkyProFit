import React, { useEffect, useState } from "react";
import { CourseBanner } from "./courseBanner";
import { useParams } from "react-router-dom";

import * as Styled from "./styles";
import { getResponse } from "../API/API";
export function CourseDescription() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getResponse().then((responseData) => {
      setData(responseData);
    });
  }, []);

  const params = useParams();

  const id = params.id;
  console.log(id);

  const filteredData = data.filter((item) => item._id === id);

  console.log(data);

  console.log(filteredData);
  console.log(filteredData[0].reasons);
  // console.log(data.map((course) => course.reasons));
  return (
    <div>
      <CourseBanner src="images/courses-wide/yoga.png" alt="Course yoga" />
      <div>
        <Styled.TitleLarge>Подойдет для вас, если:</Styled.TitleLarge>
        <Styled.StyledOrderedList>
          {filteredData.map((course) => (
            <Styled.StyledListItem>{course.reasons}</Styled.StyledListItem>
          ))}

          {/* <Styled.StyledListItem>
            Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
          </Styled.StyledListItem>
          <Styled.StyledListItem>
            Ищете активность, полезную для тела и души.
          </Styled.StyledListItem> */}
        </Styled.StyledOrderedList>
      </div>
      <div>
        <Styled.TitleLarge>Направления:</Styled.TitleLarge>
        <Styled.StyledTwoColumnList>
          {filteredData.map((course) => (
            <Styled.TextListSmall>{course.directions}</Styled.TextListSmall>
          ))}
          {/* <Styled.TextListSmall>Классическая йога</Styled.TextListSmall>
          <Styled.TextListSmall>Йогатерапия</Styled.TextListSmall>
          <Styled.TextListSmall>Кундалини-йога </Styled.TextListSmall>
          <Styled.TextListSmall>Хатха-йога</Styled.TextListSmall>
          <Styled.TextListSmall>Аштанга-йога</Styled.TextListSmall> */}
        </Styled.StyledTwoColumnList>
      </div>

      <div>
        <Styled.DetailsText>{filteredData[0].details}</Styled.DetailsText>
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
    </div>
  );
}
