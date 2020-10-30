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
        <Styled.Rewards>Rewards</Styled.Rewards>
      </Styled.Header>

      <Styled.Information>
        <Text>Apague compras com pontos que nunca expiram.</Text>
      </Styled.Information>
      <Styled.BoxButton>
        <Styled.ButtonRewards>
          <Text style={{ color: '#7E19B7' }}>CONHECER </Text>
        </Styled.ButtonRewards>
      </Styled.BoxButton>
    </Styled.Container>
  )
}

export default Lending
