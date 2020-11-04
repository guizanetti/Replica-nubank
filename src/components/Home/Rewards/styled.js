import styled from 'styled-components'

export const Container = styled.Pressable`
  width: 100%;
  height: 202px;
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
export const Shadow = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #e9d9f8;
  justify-content: center;
  align-items: center;
`

export const Rewards = styled.Text`
  margin-left: 15px;
  font-size: 24px;
  color: #7e19b7;
`

export const Information = styled.Text`
  width: 80%;
  color: #191919;
`

export const BoxButton = styled.TouchableOpacity`
  width: 108px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #7e19b775;
  align-items: center;
  justify-content: center;
`

export const ButtonRewards = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: #7e19b7;
`
