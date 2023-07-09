import React from 'react';
import * as Styled from "../styles";

export function Logo() {
  const isMainPage = window.location.pathname === "/";
  return (    
    <Styled.Logo src={isMainPage ? "images/icons/logo.svg" : "images/icons/logo-black.svg"} alt="logo" />    
  );
}