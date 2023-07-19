import { Link } from 'react-router-dom'
import Styled from 'styled-components'

export const User = Styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    position: relative;
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
    margin-top: 10px;
    right: 0;
    min-width: 100%;
    font-size: 16px;
    white-space: nowrap;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
`

export const NavLink = Styled(Link)`
    color: #000;
`

export const ArrowIcon = Styled.svg`
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'none')};
`
