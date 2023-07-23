import { useState } from 'react'
import * as Styled from './styles'
import { removeUser } from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function HeaderUser() {
  const email = localStorage.getItem('userEmail')
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(removeUser())
    localStorage.clear()
    navigate('/')
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled.User>
      <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' fill='none'>
        <circle cx='25' cy='25' r='25' fill='#D9D9D9' />
      </svg>
      <Styled.Email>{email}</Styled.Email>
      <Styled.ArrowIcon
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='9'
        viewBox='0 0 14 9'
        fill='none'
        isOpen={isOpen}
        onClick={togglePopup}
      >
        <path d='M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308' stroke='black' strokeWidth='2' />
      </Styled.ArrowIcon>
      {isOpen && (
        <Styled.Popup>
          <Styled.NavLink to='/account'>Мои курсы</Styled.NavLink>
          <Styled.Button onClick={() => onLogout()}>Выйти</Styled.Button>
        </Styled.Popup>
      )}
    </Styled.User>
  )
}
