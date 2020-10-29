import React from 'react'
import * as Styled from './styled'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TabPay = () => {
  return (
    <Styled.Container>
      <MaterialCommunityIcons name="barcode" size={24} color="#fff" />
      <Styled.Text>Pagar</Styled.Text>
    </Styled.Container>
  )
}

export default TabPay
