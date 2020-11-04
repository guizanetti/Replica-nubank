import styled from 'styled-components'
import { getPercentageSizeHeight, getPercentageSizeWidth, getRelativeSize } from '../../../utils'

export const Container = styled.View`
  width: ${getPercentageSizeWidth(100)}px;
  height: ${getPercentageSizeHeight(73)}px;
  margin-top: ${getRelativeSize(20)}px;
  background-color: #fff;
`

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-left: 3px;
  flex-direction: row;
`

export const Start = styled.Pressable`
  flex-direction: row;
`

export const IncomeBox = styled.View`
  width: ${getPercentageSizeWidth(20)}px;
  height: ${getPercentageSizeHeight(3)}px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #4ea72f;
`

export const ValueIncome = styled.Text`
  font-weight: 700;
  color: #4ea72f;
`

export const End = styled.View`
  margin-right: 10px;
`

export const Info = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin-left: 20px;
`

export const InfoBalance = styled.View``

export const InfoSaveMoney = styled.View``

export const LendingBox = styled.View`
  width: ${getPercentageSizeWidth(40)}px;
  flex-direction: row;
`

export const BalanceAvailable = styled.Text`
  font-weight: 700;
  color: #767676;
`

export const Value = styled.Text`
  font-size: 35px;
  margin-top: 7px;
  color: #191919;
`

export const SaveMoneyBox = styled.View`
  flex-direction: row;
  align-items: center;
`
export const SaveMoney = styled.Text`
  margin-left: 10px;
  color: #767676;
`

export const SavedValue = styled.Text`
  font-size: 35px;
  margin-top: 7px;
  color: #191919;
`

export const TextLending = styled.Text`
  color: #191919;
`

export const ValueLimit = styled.Text`
  font-weight: 700;
  color: #191919;
`

export const ScrollHorizontal = styled.View`
  width: 40px;
  height: 4px;
  margin-bottom: 20px;
  background-color: black;
`
