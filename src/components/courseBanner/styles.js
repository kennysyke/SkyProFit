import styled from 'styled-components'

export const CourseContent = styled.div`
  width: 1160px;
  min-height: 100%;
`

export const TitleCard = styled.h2`
  color: #000;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
  padding-bottom: 40px;
  padding-top: 75px;
  padding-right: 50px;
  padding-left: 50px;
`

export const TitleLarge = styled.h1`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  padding-bottom: 40px;
  padding-top: 75px;
`

export const StyledTwoColumnList = styled.ul`
  column-count: 2;
  column-gap: 20px;
  padding-bottom: 75px;
  padding-left: 25px;
`

export const TextListSmall = styled.li`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding-left: 10px;
`

export const DetailsText = styled.h3`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding-bottom: 75px;
`

export const StyledListItem = styled.li`
  counter-increment: my-counter;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  display: flex;
  gap: 24px;
  width: 335px;

  &::before {
    content: counter(my-counter);
    font-weight: bold;
    font-size: 24px;
    border-radius: 50%;
    background: #c7e957;
    width: 100px;
    height: 50px;
    padding: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13.359px;
  }
`

export const StyledOrderedList = styled.ol`
  display: flex;
  list-style-type: none;
  counter-reset: my-counter;
  padding-left: 0;
  justify-content: space-between;
`

export const LargeImage = styled.img`
  width: 100%;
  height: 20%;
  padding-top: 75px;
`
export const ContactContainer = styled.div`
  width: 100%;
  height: 20%;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f9ebff;
  display: flex;
  flex-direction: row;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 55px;
  padding-left: 52px;
`

export const ContactImage = styled.img`
  width: 345.795px;
  height: 337.526px;
  flex-shrink: 0;
`

export const ContactBtn = styled.button`
  width: 275px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 46px;
  background: #580ea2;
  color: white;
  font-size: 18px;
`

export const ContactText = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`
export const CourseBannerContent = styled.div`
  width: 1160px;
  height: 310px;
  background-image: url(/images/courses-wide/yoga.png);
  border-radius: 20px;
`
