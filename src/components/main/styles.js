import styled from "styled-components";

export const Logo = styled.img`
  width: 220px;
  height: 35px;
  flex-shrink: 0;
`;

export const BtnLogin = styled.button`
  display: inline-flex;
  padding: 5px 16px 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #140d40;
  color: white;
`;

export const CourseCard = styled.img`
  width: 360px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 29.998px;
  background: #fff;
  box-shadow: -10px 10px 15.998822212219238px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  padding-bottom: 35px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 35px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding-bottom: 52px;
`;
export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleSmall = styled.h3`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  letter-spacing: -0.05px;
  opacity: 0.5;
`;

export const TitleLarge = styled.h1`
  width: 830px;
  color: #f4f4ff;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 91.5%;
  letter-spacing: -1.169px;
`;

export const StickerImage = styled.img`
  width: 212.27px;
  height: 151.741px;
  transform: rotate(15deg);
  flex-shrink: 0;
`;

export const BtnUp = styled.button`
  display: inline-flex;
  padding: 7px 24px 9px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #c7e957;
  width: 100px;
  height: 32px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 34px;
`;