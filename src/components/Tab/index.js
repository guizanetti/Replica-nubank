import React from 'react'
import * as Styled from './styled'

const Tab = ({ name, icon: Icon, onPress, first, resume }) => {
  return (
    <Styled.Container resume={resume} first={first} onPress={onPress}>
      {Icon && <Icon />}
      <Styled.Text resume={resume}>{name}</Styled.Text>
    </Styled.Container>
  )
}

export default Tab
