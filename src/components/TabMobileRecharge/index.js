import React from 'react'
import * as Styled from './styled'
import { SimpleLineIcons } from '@expo/vector-icons'

const TabMobileRecharge = () => {
  return (
    <Styled.Container>
      <SimpleLineIcons name="screen-smartphone" size={24} color="#fff" />
      <Styled.Text>Recarga de celular</Styled.Text>
    </Styled.Container>
  )
}

export default TabMobileRecharge
