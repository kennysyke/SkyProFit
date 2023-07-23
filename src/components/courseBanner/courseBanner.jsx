import React from 'react'
import * as Styled from './styles'

export function CourseBanner({ pic, name }) {
  console.log(pic)

  return (
    <Styled.Pic src={pic}>
      <Styled.Name>{name}</Styled.Name>
    </Styled.Pic>
  )
}
