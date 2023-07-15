import styled from 'styled-components';

export const Logo = styled.img`
  width: 220px;
  height: 35px;
  flex-shrink: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 35px;
`;

export const ProfileTitle = styled.h1`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    padding-bottom: 40px;
`;

export const ProfileSubTitle = styled.p`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 40px;
`;

export const ContainerForm = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NewDataForms = styled.div`
    width: 366px;
    height: 439px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
`;

export const LabelForm = styled.div`
width: 278.5px;
height: 35px;
}
`;

export const LoginInput = styled.input`
width: 278.5px;
height: 35px;
border: none;
border-bottom: 1px solid #D0CECE;;
margin-bottom: 60px;
padding-bottom: 8px;
::placeholder {       
    color: #E1E1E1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
}
}
`;

export const PasswordInput = styled.input`
width: 278.5px;
height: 35px;
border: none;
border-bottom: 1px solid #D0CECE;;
margin-bottom: 60px;
padding-bottom: 8px;
::placeholder {       
    color: #E1E1E1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
}
}
`;

export const BtnSave = styled.button`
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

export const ContainerProfile = styled.div`
    max-width: 1920px;
    margin: 0px auto;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const BtnBox = styled.div`
    max-width: 1920px;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const BtnChange = styled.button`
    width: 278px;
    height: 52px;
    background: #580ea2;
    border-radius: 46px;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    :hover {
        background:#3F007D;
        color: #ffffff;
        cursor: pointer;
    }
    :active {
        background:#271A58;
        color: #ffffff;
        cursor: pointer;
    }
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
  width: 1160px;
`;
