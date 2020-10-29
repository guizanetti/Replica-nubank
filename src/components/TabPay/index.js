import React from 'react'
import * as Styled from './styled'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const tabPay = () => {
  return (
    <Styled.Container>
      <MaterialCommunityIcons name="barcode" size={24} color="#fff" />
      <Styled.Text>Pagar</Styled.Text>
    </Styled.Container>
  )
}

export default tabPay
