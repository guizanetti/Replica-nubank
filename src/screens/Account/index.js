import React from 'react'
import * as Styled from './styled'
import ResumeAccount from '../../components/Resume/ResumeAccount'

import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Octicons,
  MaterialIcons,
} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Tab from '../../components/Tab'

const Account = () => {
  const tabs = [
    {
      name: 'Pagar',
      icon: () => <MaterialCommunityIcons name="barcode" size={24} color="#7E19B7" />,
    },
    {
      name: 'Transferir',
      icon: () => <FontAwesome5 name="coins" size={24} color="#7E19B7" />,
    },

    {
      name: 'Ajustar limite',
      icon: () => <FontAwesome name="sliders" size={24} color="#7E19B7" />,
    },
    {
      name: 'Cartão virtual',
      icon: () => <Octicons name="credit-card" size={24} color="#7E19B7" />,
    },
    {
      name: 'Bloquear cartão',
      icon: () => <MaterialIcons name="lock-open" size={24} color="#7E19B7" />,
    },

    {
      name: 'Indicar amigos',
      icon: () => <Feather name="user-plus" size={24} color="#7E19B7" />,
    },
  ]

  return (
    <Styled.Container>
      <ResumeAccount />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Styled.Footer>
          {tabs.map((item, index) => (
            <Tab key={index} first={index === 0} resume text name={item.name} icon={item.icon} />
          ))}
        </Styled.Footer>
      </ScrollView>
    </Styled.Container>
  )
}

export default Account
