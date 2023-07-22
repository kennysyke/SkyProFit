import { Link } from 'react-router-dom'
import Styled from 'styled-components'

export const User = Styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    position: relative;
    margin-top: -25px;
`
export const Email = Styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    padding-left: 3px;
`

export const Popup = Styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 160px;
    font-size: 16px;
    white-space: nowrap;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
`

export const NavLink = Styled(Link)`
    color: #000;
    align-self: flext-start;
`
export const ArrowIcon = Styled.svg`
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'none')};
`

export const Button = Styled.button`
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all .2s ease;
  border-radius: 46px;
  letter-spacing: -0.05px;
  min-width: 78px;
  padding: 5px 16px 7px;
  background: #580ea2;
  color: #FFF;

  &:hover {
    background:#3F007D;
  }

  &:active {
    background:#271A58;
  }
`
