import Styled from 'styled-components';

export const ContainerLoginForm = Styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color:#D0CECE;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LoginForms = Styled.div`
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
export const LoginInput = Styled.input`
    width: 278.5px;
    height: 35px;
    border: none;
    border-bottom: 1px solid rgb(208, 206, 206);
    margin-bottom: 38px;
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
export const PasswordInput = Styled.input`
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
export const PasswordInputRep = Styled.input`
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
export const BtnEnter = Styled.button`
    width: 278px;
    height: 52px;
    background: #580EA2;
    border-radius: 46px;
    margin-bottom: 25px;
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
export const BtnRegistration = Styled.button`
    width: 278px;
    height: 52px;
    border: 1px solid #d0cece;
    background: #ffffff;
    border-radius: 46px;
    margin-bottom: 47px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`;
export const Navigation = Styled.nav`
    display: flex;
    flex-direction: column;
`;