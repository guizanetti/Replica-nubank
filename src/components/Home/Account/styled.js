import styled from 'styled-components'
import { getPercentageSizeWidth } from '../../../utils'

export const Container = styled.Pressable`
  width: ${getPercentageSizeWidth(93)}px;
  height: 145px;
  border-radius: 3px;
  padding: 20px;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 15px;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Account = styled.Text`
  margin-left: 15px;
  font-weight: 500;
  color: #707070;
`

export const BalanceAvailable = styled.Text`
  color: #707070;
`

export const Value = styled.Text`
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  color: #191919;
`
