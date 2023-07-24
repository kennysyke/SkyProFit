import React from 'react'
import { Button } from '../headerButton/button'
import * as Styled from './styles'
import { useState } from 'react'
import { Logo } from '../logo/logo'
import { HeaderUser } from '../headerUser/headerUser'
import { removeUser } from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export function Header() {

  const[userId, setUserId] = useState(localStorage.getItem('userId'))
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(removeUser())
    localStorage.clear()
    setIsOpen(!isOpen)
    setUserId('')
    navigate('/')
  }
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Styled.HeaderContainer>
      <Logo />
      {userId  ? <HeaderUser onLogout= {onLogout} togglePopup={togglePopup}  isOpen={isOpen}/> : <Button />}
    </Styled.HeaderContainer>
  )
}
