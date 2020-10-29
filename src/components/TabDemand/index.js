import React from 'react'
import * as Styled from './styled'
import { Feather } from '@expo/vector-icons'

const TabDemand = () => {
  return (
    <Styled.Container>
      <Feather name="message-circle" size={24} color="#fff" />
      <Styled.Text>cobrar</Styled.Text>
    </Styled.Container>
  )
}

export default TabDemand
