
import * as Styled from "./Styles";



export const ButtonForm = ({onClick, text}) => {

  return (   
    <Styled.BtnEnter onClick={onClick}>{text}</Styled.BtnEnter>    
     
  );
};
