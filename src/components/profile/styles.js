import styled from 'styled-components'

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;
`

export const ProfileTitle = styled.h2`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  padding-bottom: 40px;
`

export const ProfileSubTitle = styled.p`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding-bottom: 40px;
`

export const BtnBox = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const BtnChange = styled.button`
  width: 278px;
  height: 52px;
  background: #580ea2;
  border-radius: 46px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background: #3f007d;
    color: #ffffff;
    cursor: pointer;
  }

  &:active {
    background: #271a58;
    color: #ffffff;
    cursor: pointer;
  }
`

export const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const CoursesCards = styled.div`
  position: relative;

  &:hover {
    transform: scale(1.005);
  }
`

export const CourseCard = styled.img`
  width: 360px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 29.998px;
  background: #fff;
  box-shadow:
    -10px 10px 15.998822212219238px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
`

export const GoBtn = styled.button`
  width: 140px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  padding: 10px 10px;
  background-color: #c7e957;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transform: translate(20%, -170%);
  transition: opacity 0.35s ease;

  &:hover {
    cursor: pointer;
    background-color: #daf289;
  }

  &:active {
    background-color: #ebffab;
  }
`
