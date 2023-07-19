import { useState } from 'react'
import * as Styled from './styles'
import { removeUser } from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export function HeaderUser() {
  const userEmail = useSelector((state) => state.user.email)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(removeUser())
    localStorage.clear()
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled.User>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <circle cx='25' cy='25' r='25' fill='#D9D9D9' />
      </svg>
      <Styled.Email>{userEmail}</Styled.Email>
      <Styled.ArrowIcon
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='9'
        viewBox='0 0 14 9'
        fill='none'
        isOpen={isOpen}
        onClick={togglePopup}
      >
        <path
          d='M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308'
          stroke='black'
          strokeWidth='2'
        />
      </Styled.ArrowIcon>
      {isOpen && (
        <Styled.Popup>
          <Styled.NavLink to='/account'>Мои курсы</Styled.NavLink>
          <Styled.NavLink onClick={() => onLogout()}>Выйти</Styled.NavLink>
        </Styled.Popup>
      )}
    </Styled.User>
  )
}
