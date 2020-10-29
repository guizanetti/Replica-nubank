import React from 'react'
import * as Styled from './styled'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Text } from 'react-native'

const Lending = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Shadow>
          <SimpleLineIcons name="present" size={24} color="#7E19B7" />
        </Styled.Shadow>
        <Text style={{ marginLeft: 15, color: '#7E19B7' }}>Rewards</Text>
      </Styled.Header>

      <Styled.Information>
        <Text>Apague compras com pontos que nunca expiram.</Text>
      </Styled.Information>

      <Styled.SimulateLoan>
        <Text style={{ color: '#7E19B7' }}>CONHECER </Text>
      </Styled.SimulateLoan>
    </Styled.Container>
  )
}

export default Lending
