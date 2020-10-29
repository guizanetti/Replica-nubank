import React from 'react'
import * as Styled from './styled'
import { FontAwesome5 } from '@expo/vector-icons'

const TabTransfer = () => {
  return (
    <Styled.Container>
      <FontAwesome5 name="coins" size={24} color="#fff" />
      <Styled.Text>Transferir</Styled.Text>
    </Styled.Container>
  )
}

export default TabTransfer
