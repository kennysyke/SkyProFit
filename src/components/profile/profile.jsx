import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { useGetCoursesQuery } from '../../redux/fitnesApiBase'
import { ModalWorkout } from '../accWorkoutList/modalWorkoutsList'

export function Profile() {
  const { data, isLoading } = useGetCoursesQuery()
   
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

  const password = localStorage.getItem('userPassword')
  const email = localStorage.getItem('userEmail')
if (isLoading) {
    return <h1>Идет подгрзука данных</h1>
  }
  const userCourses = Object.values(data)
  const myCourses = []
  
  for (const el of userCourses) {
    for (const id of el.users) {
        if(id===localStorage.getItem('userId')){
          myCourses.push(el._id)
      }
    }
  }
  return (
    <>
      <Styled.ContainerProfile>
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
        {myCourses.map((card, i) => (
          <Styled.CoursesCards key={i}>
            <Styled.CourseCard src={`images/courses-mini/${card}.png`}/>
            <Styled.GoBtn onClick={() => handleOpenModal(card)}>Перейти →</Styled.GoBtn>
          </Styled.CoursesCards>
        ))}
      </Styled.CoursesContainer>
      {isModalOpen && <ModalWorkout cardId={selectedCardId} onClose={handleCloseModal} />}
    </>
  )
}
