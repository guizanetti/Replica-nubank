import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 195px;
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
export const Lending = styled.Text`
  font-weight: 500;
  margin-left: 15px;
  color: #707070;
`

export const AvailableValue = styled.View`
  margin-top: 25px;
`

export const Available = styled.Text`
  font-size: 14px;
  color: #191919;
`

export const Value = styled.Text`
  margin-top: 5px;
  font-weight: 700;
  color: #191919;
`

export const BoxLoan = styled.TouchableOpacity`
  width: 184px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #7e19b775;
  align-items: center;
  justify-content: center;
`
export const SimulateLoan = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: #7e19b7;
`
