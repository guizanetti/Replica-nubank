import React from 'react'
import * as Styled from './styled'
import { useNavigation } from '@react-navigation/native'
import {
  Feather,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
} from '@expo/vector-icons'

const ResumeAccount = () => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Start onPress={handleGoBack}>
          <Feather name="chevron-left" size={24} color="#707070" />
          <MaterialCommunityIcons name="coin" size={22} color="#707070" />
        </Styled.Start>
        <Styled.IncomeBox>
          <Styled.ValueIncome>+R$ 0,00</Styled.ValueIncome>
        </Styled.IncomeBox>
        <Styled.End>
          <EvilIcons name="question" size={30} color="#707070" />
        </Styled.End>
      </Styled.Header>

      <Styled.Info>
        <Styled.InfoBalance>
          <Styled.BalanceAvailable>Saldo disponível</Styled.BalanceAvailable>
          <Styled.Value>R$ 0,00</Styled.Value>
        </Styled.InfoBalance>

        <Styled.InfoSaveMoney>
          <Styled.SaveMoneyBox>
            <FontAwesome5 name="piggy-bank" size={24} color="#767676" />
            <Styled.SaveMoney>Guardar dinheiro</Styled.SaveMoney>
          </Styled.SaveMoneyBox>
          <Styled.SavedValue>R$ 0,00</Styled.SavedValue>
        </Styled.InfoSaveMoney>

        <Styled.LendingBox>
          <Fontisto name="wallet" size={22} color="#707070" />
          <Styled.TextLending>Valor disponível para empréstimo de</Styled.TextLending>
          <Styled.ValueLimit>R$ 12,500</Styled.ValueLimit>
        </Styled.LendingBox>
      </Styled.Info>
      {/* <Styled.ScrollHorizontal /> */}
    </Styled.Container>
  )
}

export default ResumeAccount
