import React from 'react'
import * as Styled from './styled'
import { Feather } from '@expo/vector-icons'
import { Text } from 'react-native'

const CreditCard = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Feather name="credit-card" size={24} color="#707070" />
        <Text style={{ marginLeft: 15, color: '#707070' }}>Cartão de Crédito</Text>
      </Styled.Header>

      <Styled.CurrentValue>
        <Text style={{ color: '#707070' }}>Fatura Atual</Text>
        <Text style={{ color: '#4F9ED8', marginTop: 15 }}>R$ 2.085,25</Text>
      </Styled.CurrentValue>

      <Styled.AvailableLimit>
        <Text>Limite disponível</Text>
        <Text style={{ color: '#3E7D4A' }}> R$ 11.014,75</Text>
      </Styled.AvailableLimit>
    </Styled.Container>
  )
}

export default CreditCard
