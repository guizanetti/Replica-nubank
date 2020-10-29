import React from 'react'
import * as Styled from './styled'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from 'react-native'

const Account = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <MaterialCommunityIcons name="coin" size={24} color="#707070" />
        <Text style={{ marginLeft: 15, color: '#707070' }}>Conta</Text>
      </Styled.Header>

      <Styled.BalanceAvailable>
        <Text style={{ color: '#707070' }}>Saldo disponível</Text>
      </Styled.BalanceAvailable>

      <Styled.Value>
        <Text>R$ 0,00</Text>
      </Styled.Value>
    </Styled.Container>
  )
}

export default Account
