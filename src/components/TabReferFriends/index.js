import React from 'react'
import * as Styled from './styled'
import { Feather } from '@expo/vector-icons'

const TabReferFriends = () => {
  return (
    <Styled.Container>
      <Feather name="user-plus" size={24} color="#fff" />
      <Styled.Text>Indicar amigos</Styled.Text>
    </Styled.Container>
  )
}

export default TabReferFriends
