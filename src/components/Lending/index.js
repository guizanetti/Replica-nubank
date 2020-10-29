import React from 'react'
import * as Styled from './styled'
import { AntDesign } from '@expo/vector-icons'
import { Text } from 'react-native'

const Lending = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <AntDesign name="wallet" size={24} color="#707070" />
        <Text style={{ marginLeft: 15, color: '#707070' }}>Empréstimo</Text>
      </Styled.Header>

      <Styled.AvailableValue>
        <Text>Valor disponível de até</Text>
        <Text>R$ 23.000,00</Text>
      </Styled.AvailableValue>

      <Styled.SimulateLoan>
        <Text style={{ color: '#7E19B7' }}>SIMULAR EMPRÉSTIMO</Text>
      </Styled.SimulateLoan>
    </Styled.Container>
  )
}

export default Lending