import React from 'react'
import { Image } from 'react-native'
import * as Styled from './styled'

const TabPix = () => {
  return (
    <Styled.Container>
      <Image style={{ width: 28, height: 30 }} source={require('../../../assets/pixImg.png')} />
      <Styled.Text>Pix</Styled.Text>
    </Styled.Container>
  )
}

export default TabPix
