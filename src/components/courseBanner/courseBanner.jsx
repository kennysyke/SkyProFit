import React from 'react'
import * as Styled from './styles'

export function CourseBanner({ pic, name }) {
  return (
    <Styled.Pic src={pic}>
      <Styled.Name>{name}</Styled.Name>
    </Styled.Pic>
  )
}
