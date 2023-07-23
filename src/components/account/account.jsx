import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { MYCARDS } from '../../constants'
import { ModalWorkout } from '../accWorkoutList/modalWorkoutsList'
import { useAuth } from '../../redux/hooks/useAuth'
import { HeaderUser } from '../headerUser/headerUser'
import { Logo } from '../logo/logo'

export function Profile() {
  const navigate = useNavigate()

  const handleLoginChange = () => {
    navigate('/newlogin')
  }

  function handlePasChange() {
    navigate('/newpas')
  }
  const [selectedCardId, setSelectedCardId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (cardId) => {
    setSelectedCardId(cardId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const { email } = useAuth()

  const password = localStorage.getItem('userPassword')

  return (
    <div>
      <Styled.ContainerProfile>
        <Styled.HeaderContainer>
          <Logo />
          <HeaderUser />
        </Styled.HeaderContainer>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileSubTitle>Логин: {email}</Styled.ProfileSubTitle>
        <Styled.ProfileSubTitle>Пароль: {password}</Styled.ProfileSubTitle>
        <Styled.BtnBox>
          <Styled.BtnChange onClick={handleLoginChange}>Редактировать логин</Styled.BtnChange>
          <Styled.BtnChange onClick={handlePasChange}>Редактировать пароль</Styled.BtnChange>
        </Styled.BtnBox>
      </Styled.ContainerProfile>

      <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
      <Styled.CoursesContainer>
        {MYCARDS.map((card) => (
          <Styled.CoursesCards>
            <Styled.CourseCard src={card.image} alt={card.alt} />
            <Styled.GoBtn onClick={() => handleOpenModal(card.id)}>Перейти →</Styled.GoBtn>
          </Styled.CoursesCards>
        ))}
      </Styled.CoursesContainer>
      {isModalOpen && <ModalWorkout cardId={selectedCardId} onClose={handleCloseModal} />}
    </div>
  )
}
