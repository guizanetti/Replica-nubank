import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 164px;
  border-radius: 3px;
  padding: 20px;
  justify-content: space-between;
  background-color: #fff;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CreditCard = styled.Text`
  margin-left: 15px;
  font-weight: 500;
  color: #707070;
`

export const CurrentInvoice = styled.Text`
  color: #707070;
`

export const Value = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #4f9ed8;
`

export const AvailableLimit = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Limit = styled.Text`
  color: #191919;
`

export const ValueLimit = styled.Text`
  font-weight: 700;
  color: #3e7d4a;
`
