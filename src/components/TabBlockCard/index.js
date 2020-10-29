import React from 'react'
import * as Styled from './styled'
import { MaterialIcons } from '@expo/vector-icons'

const TabBlockCard = () => {
  return (
    <Styled.Container>
      <MaterialIcons name="lock-open" size={24} color="#fff" />
      <Styled.Text>Bloquear cartão</Styled.Text>
    </Styled.Container>
  )
}

export default TabBlockCard
