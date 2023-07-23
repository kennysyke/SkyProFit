import styled from 'styled-components'

export const TitleLarge = styled.h1`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  padding-bottom: 40px;
  padding-top: 75px;
`

export const StyledOrderedList = styled.ol`
  counter-reset: num;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  font-size: 24px;
  line-height: 32px;
  list-style-type: none;
`

export const StyledListItem = styled.li`
  position: relative;
  padding-left: 91px;

  &::before {
    content: counter(num);
    counter-increment: num;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 67px;
    height: 67px;
    font-size: 32px;
    line-height: 25px;
    color: #000;
    background: #c7e957;
    border-radius: 50%;
  }
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
