import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "../styles";

export function ProfileIcon() {
  return (   
    <Link to="/account">
      <Styled.BtnProfile>Сергей</Styled.BtnProfile>  
    </Link> 
  );
}