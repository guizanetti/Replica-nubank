import React from 'react'
import * as Styled from './styled'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from 'react-native'

const Account = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <MaterialCommunityIcons name="coin" size={22} color="#707070" />
        <Styled.Account>Conta</Styled.Account>
      </Styled.Header>

      <Styled.BalanceAvailable>Saldo disponível</Styled.BalanceAvailable>

      <Styled.Value>R$ 50.000,00</Styled.Value>
    </Styled.Container>
  )
}

export default Account
