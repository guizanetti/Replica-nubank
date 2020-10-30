import React from 'react'
import * as Styled from './styled'
import { SimpleLineIcons, Octicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Name>Olá, Guilherme</Styled.Name>
        <Styled.EyeIcon>
          <Styled.Shadow>
            <Octicons name="eye-closed" size={26} color="#fff" />
          </Styled.Shadow>
        </Styled.EyeIcon>
        <Styled.SettingIcon>
          <Styled.Shadow>
            <SimpleLineIcons name="settings" size={26} color="#fff" />
          </Styled.Shadow>
        </Styled.SettingIcon>
      </Styled.Header>
    </Styled.Container>
  )
}

export default Header
