import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

import { useGetAllCourses } from "../../services/api";

export function Center() {
  const data = useGetAllCourses();

  console.log(data);
  console.log(data.map((course) => course.reasons));

  return (
    <Styled.CenterContainer>
      <Styled.CoursesContainer>
        {data.map((course) => (
          <Link key={course._id} to={`/course/${course._id}`}>
            <Styled.CourseCard
              src={
                course._id === "yo2g4f"
                  ? "images/courses-mini/yoga-card.png"
                  : course._id === "ab1c3f"
                  ? "images/courses-mini/stretching-card.png"
                  : course._id === "dan7it"
                  ? "images/courses-mini/dancefit-card.png"
                  : course._id === "st3p4e"
                  ? "images/courses-mini/step-card.png"
                  : course._id === "bod73x"
                  ? "images/courses-mini/bodyflex-card.png"
                  : "images/courses-mini/bodyflex-card.png"
              }
              alt="Course card"
            />
          </Link>
        ))}
      </Styled.CoursesContainer>
      <Styled.ButtonContainer>
        <Styled.BtnUp>Наверх↑</Styled.BtnUp>
      </Styled.ButtonContainer>
    </Styled.CenterContainer>
  );
}
