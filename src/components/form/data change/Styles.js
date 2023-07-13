import styled from 'styled-components';

export const ContainerForm = styled.div`
    max-width: 1920px;
    // height: 100vh;
    background-color: #f8f8ff;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    //временные отступы
    margin-top: 25px;
    padding: 10px;
`;

export const NewLoginForm = styled.div`
    width: 366px;
    height: 331px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
`;

export const NewPasForm = styled.div`
    width: 366px;
    height: 400px;
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
`;

export const ContainerCourse = styled.div`
    max-width: 1920px;
    margin: 0px auto;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const CourseBox = styled.div`
    max-width: 1160px;
    margin: 0px auto;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
`;
