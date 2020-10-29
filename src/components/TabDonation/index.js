import React from 'react'
import * as Styled from './styled'
import { FontAwesome5 } from '@expo/vector-icons'

const TabDonation = () => {
  return (
    <Styled.Container>
      <FontAwesome5 name="hand-holding-usd" size={24} color="#fff" />
      <Styled.Text>Doação</Styled.Text>
    </Styled.Container>
  )
}

export default TabDonation
