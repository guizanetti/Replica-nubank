import React from 'react'
import * as Styled from './styled'
import { useNavigation } from '@react-navigation/native'
import { Feather, EvilIcons } from '@expo/vector-icons'

const ResumeCrediCard = () => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Start onPress={handleGoBack}>
          <Feather name="chevron-left" size={24} color="#707070" />
          <Feather name="credit-card" size={24} color="#707070" />
        </Styled.Start>
        <Styled.End>
          <Feather name="search" size={24} color="#707070" />
          <EvilIcons name="question" size={30} color="#707070" />
        </Styled.End>
      </Styled.Header>

      <Styled.Main>
        <Styled.InfoCredit>
          <Styled.CurrentInvoice>Fatura atual</Styled.CurrentInvoice>
          <Styled.Value>R$ 245,87</Styled.Value>
          <Styled.AvailableLimit>
            <Styled.Limit>Limite disponível</Styled.Limit>
            <Styled.ValueLimit> R$ 13.000,00</Styled.ValueLimit>
          </Styled.AvailableLimit>
        </Styled.InfoCredit>
        <Styled.Bars>
          <Styled.OptionLimit />
          <Styled.OptionInvoice />
        </Styled.Bars>
      </Styled.Main>
      <Styled.ScrollHorizontal />
    </Styled.Container>
  )
}

export default ResumeCrediCard
