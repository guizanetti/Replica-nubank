import React from 'react'
import * as Styled from './styled'
import { Fontisto } from '@expo/vector-icons'

const TabLending = () => {
  return (
    <Styled.Container>
      <Fontisto name="wallet" size={24} color="#fff" />
      <Styled.Text>Empréstimos</Styled.Text>
    </Styled.Container>
  )
}

export default TabLending
