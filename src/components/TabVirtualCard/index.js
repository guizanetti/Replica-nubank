import React from 'react'
import * as Styled from './styled'
import { Octicons } from '@expo/vector-icons'

const TabVirtualCard = () => {
  return (
    <Styled.Container>
      <Octicons name="credit-card" size={24} color="#fff" />
      <Styled.Text>Cartão virtual</Styled.Text>
    </Styled.Container>
  )
}

export default TabVirtualCard
