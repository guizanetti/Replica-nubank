import React from 'react'
import * as Styled from './styled'
import { FontAwesome } from '@expo/vector-icons'

const TabAdjustLimit = () => {
  return (
    <Styled.Container>
      <FontAwesome name="sliders" size={24} color="#fff" />
      <Styled.Text>Ajustar limite</Styled.Text>
    </Styled.Container>
  )
}

export default TabAdjustLimit
