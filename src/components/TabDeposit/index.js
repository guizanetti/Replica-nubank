import React from 'react'
import * as Styled from './styled'
import { Foundation } from '@expo/vector-icons'

const TabDeposit = () => {
  return (
    <Styled.Container>
      <Foundation name="bitcoin-circle" size={24} color="#fff" />
      <Styled.Text>Depositar</Styled.Text>
    </Styled.Container>
  )
}

export default TabDeposit
