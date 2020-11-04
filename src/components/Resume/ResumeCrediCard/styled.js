import styled from 'styled-components'
import { getPercentageSizeHeight, getPercentageSizeWidth, getRelativeSize } from '../../../utils'

export const Container = styled.View`
  width: ${getPercentageSizeWidth(100)}px;
  height: ${getPercentageSizeHeight(73)}px;
  margin-top: ${getRelativeSize(20)}px;
  justify-content: space-between;
  background-color: #fff;
`
export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-left: 3px;
  flex-direction: row;
`

export const Main = styled.View`
  flex-direction: row;
  width: ${getPercentageSizeWidth(100)}px;
  justify-content: space-between;
`

export const Start = styled.Pressable`
  flex-direction: row;
`

export const End = styled.View`
  margin-right: 10px;
  flex-direction: row;
`

export const InfoCredit = styled.View`
  margin-left: 20px;
  justify-content: center;
`

export const CurrentInvoice = styled.Text`
  font-weight: 700;
  color: #4f9ed8;
`

export const Value = styled.Text`
  font-size: 35px;
  margin-top: 7px;
  color: #4f9ed8;
`

export const AvailableLimit = styled.View`
  flex-direction: row;
  margin-top: 7px;
  align-items: center;
`

export const Limit = styled.Text`
  color: #191919;
`

export const ValueLimit = styled.Text`
  font-weight: 700;
  color: #5fc35d;
`

export const Bars = styled.View`
  align-items: flex-end;

  margin: 20px;
`

export const OptionLimit = styled.View`
  width: ${getPercentageSizeWidth(2)}px;
  height: ${getPercentageSizeHeight(45)}px;
  background-color: #5fc35d;
  align-items: flex-end;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`
export const OptionInvoice = styled.View`
  width: ${getPercentageSizeWidth(2)}px;
  height: ${getPercentageSizeHeight(15)}px;
  margin-top: 1px;
  background-color: #4f9ed8;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`

export const ScrollHorizontal = styled.View`
  width: 40px;
  height: 4px;
  margin-bottom: 20px;
  background-color: black;
`
