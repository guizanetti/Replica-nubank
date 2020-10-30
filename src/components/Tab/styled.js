import styled, { css } from 'styled-components'

export const Container = styled.TouchableOpacity`
  width: 91px;
  height: 100px;
  border-radius: 3px;
  padding: 7px;
  background-color: #8b2dbf;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;

  ${({ first }) =>
    first &&
    css`
      margin: 0;
    `}
`

export const Text = styled.Text`
  font-size: 14px;
  color: #fff;
`
