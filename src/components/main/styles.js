import styled from "styled-components";

export const Logo = styled.img`
  width: 220px;
  height: 35px;
  flex-shrink: 0;
  margin-bottom: 25px;
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
  width: 1160px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  padding-bottom: 35px;
`;

export const HeaderContainer = styled.div`
  width: 1160px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 35px;
`;

export const TitleContainer = styled.div`
  width: 1160px;
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
  width: 1160px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const BtnProfile = styled.button`
  display: inline-block;	
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;  
  vertical-align: top;
  transition: box-shadow 0.2s;
  .btn:focus-visible {
    border: 1px solid #4c51f9;
    outline: none;
  }
  :hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
  :active {
    background-color: #808080;
  }
  :disabled {
    background-color: #eee;
    border-color: #eee;
    color: #444;
    cursor: not-allowed;
  }
`;

