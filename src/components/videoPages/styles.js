import styled from "styled-components";

export const Player = styled.div`
  width: 1440px;
  height: 800px;
`;

export const ExercisesBox = styled.div`
  width: 428px;
  height: 500px;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
export const ExercisesTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;
export const ExercisesList = styled.ol`
  list-style-type: disc;
  color: black;
  padding-bottom: 40px;
  margin-left: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ExercisesListItems = styled.li`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;
export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 638px;
  height: 336px;
  border-radius: 30px;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
`;
export const ProgressTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 40px;
`;

export const ProgressBoxRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LabelProgress = styled.label`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;
export const ProgressBar1 = styled.input`
  opacity: 0%;
`;
export const ContainerProgressBar1 = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 22px;
  border: 2px solid #565eef;
  background: #edecff;
  height: 36px;
  width: 278px;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progressWidth};
    background: #565eef;
  }
`;
export const ContainerProgressBar2 = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 22px;
  border: 2px solid #ff6d00;
  background: #edecff;
  height: 36px;
  width: 278px;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progressWidth};
    background: #ff6d00;
  }
`;
export const ContainerProgressBar3 = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 22px;
  border: 2px solid #9a48f1;
  background: #edecff;
  height: 36px;
  width: 278px;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progressWidth};
    background: #9a48f1;
  }
`;

export const ProgressBar2 = styled.input`
  opacity: 0%;
`;
export const ProgressBar3 = styled.input`
  opacity: 0%;
`;

export const BtnEnter = styled.button`
  width: 278px;
  height: 52px;
  background: #580ea2;
  border-radius: 46px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  width: 444px;
  height: 554px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;

export const ModalHeader = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 30px;
`;

export const ModalQuestion = styled.label`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 361px;
  padding-bottom: 20px;
`;

export const ModalInput = styled.input`
  width: 361px;
  height: 35px;
  border: none;
  border-bottom: 1px solid rgb(208, 206, 206);
  margin-bottom: 38px;
  padding-bottom: 8px;
  ::placeholder {
    color: #e1e1e1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ModalButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 46px;
  color: white;
  background: #580ea2;
`;