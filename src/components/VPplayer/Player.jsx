import React from 'react'
import ReactPlayer from 'react-player'
import * as Styled from './styles'

export const Player = ({ source }) => {
  return (
    <Styled.Player>
      <ReactPlayer url={source} width='100%' height='100%' controls />
    </Styled.Player>
  )
}
