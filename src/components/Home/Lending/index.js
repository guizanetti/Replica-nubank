import React from 'react'
import * as Styled from './styled'
import { Text } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

const Lending = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Fontisto name="wallet" size={22} color="#707070" />
        <Styled.Lending>Empréstimo</Styled.Lending>
      </Styled.Header>

      <Styled.AvailableValue>
        <Styled.Available>Valor disponível de até</Styled.Available>
        <Styled.Value> R$ 12.500,00</Styled.Value>
      </Styled.AvailableValue>
      <Styled.BoxLoan>
        <Styled.SimulateLoan>SIMULAR EMPRÉSTIMO</Styled.SimulateLoan>
      </Styled.BoxLoan>
    </Styled.Container>
  )
}

export default Lending
