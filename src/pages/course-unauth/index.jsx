import { CourseDescription } from "../../components/course-unauth/courseDescription";
import { Header } from "../../components/main/header/header";
import * as Styled from "./styles";

export const CourseUnauth = () => {   
 
    return (
      <Styled.CourseUnauthContent>
        <Header/>
        <CourseDescription/>
      </Styled.CourseUnauthContent>
    );
  }