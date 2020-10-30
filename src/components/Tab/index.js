import React from 'react'
import { Image } from 'react-native'
import * as Styled from './styled'

const Tab = ({ name, icon: Icon, onPress, first }) => {
  return (
    <Styled.Container first={first} onPress={onPress}>
      {Icon && <Icon />}
      <Styled.Text>{name}</Styled.Text>
    </Styled.Container>
  )
}

export default Tab
