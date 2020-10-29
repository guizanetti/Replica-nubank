import React from 'react'
import * as Styled from './styled'
import { AntDesign } from '@expo/vector-icons'

const TabHelpMe = () => {
  return (
    <Styled.Container>
      <AntDesign name="questioncircleo" size={24} color="#fff" />
      <Styled.Text>Me ajuda</Styled.Text>
    </Styled.Container>
  )
}

export default TabHelpMe
