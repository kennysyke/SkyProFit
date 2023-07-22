import React, { useEffect } from 'react'
import * as Styled from '../VPmodalProgress/styles'

export const ModalOk = ({ showModalOk, setShowModalOk, onClose }) => {
  useEffect(() => {
    if (showModalOk) {
      const timer = setTimeout(() => {
        setShowModalOk(false)
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showModalOk, setShowModalOk, onClose])

  if (!showModalOk) {
    return null
  }
  return (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        <Styled.ModalHeader>Ваш прогресс засчитан!</Styled.ModalHeader>
        <Styled.Image src='/images/ok-hand.png' alt='ok-hand' />
      </Styled.ModalContent>
    </Styled.ModalContainer>
  )
}
