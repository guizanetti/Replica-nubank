import React from 'react'
import * as Styled from './styled'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CreditCard = () => {
  const { navigate } = useNavigation()

  return (
    <Styled.Container onPress={() => navigate('Resume')}>
      <Styled.Header>
        <Feather name="credit-card" size={24} color="#707070" />
        <Styled.CreditCard>Cartão de Crédito</Styled.CreditCard>
      </Styled.Header>

      <Styled.CurrentInvoice>Fatura Atual</Styled.CurrentInvoice>

      <Styled.Value>R$ 2.000,00</Styled.Value>
      <Styled.AvailableLimit>
        <Styled.Limit>Limite disponível</Styled.Limit>
        <Styled.ValueLimit> R$ 13.000,00</Styled.ValueLimit>
      </Styled.AvailableLimit>
    </Styled.Container>
  )
}

export default CreditCard
