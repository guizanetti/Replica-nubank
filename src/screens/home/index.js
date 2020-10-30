import React from 'react'
import * as Styled from './styled'
import { Image, View } from 'react-native'

import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Foundation,
  Fontisto,
  Octicons,
  SimpleLineIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons'

import Header from '../../components/Home/Header'
import CreditCard from '../../components/Home/CreditCard'
import Account from '../../components/Home/Account'
import Lending from '../../components/Home/Lending'
import Rewards from '../../components/Home/Rewards'
import { ScrollView } from 'react-native-gesture-handler'
import Tab from '../../components/Tab'

const Home = () => {
  const tabs = [
    {
      name: 'Pix',
      icon: () => (
        <Image style={{ width: 28, height: 30 }} source={require('../../../assets/pixImg.png')} />
      ),
    },
    {
      name: 'Pagar',
      icon: () => <MaterialCommunityIcons name="barcode" size={24} color="#fff" />,
    },
    {
      name: 'Indicar amigos',
      icon: () => <Feather name="user-plus" size={24} color="#fff" />,
    },
    {
      name: 'Transferir',
      icon: () => <FontAwesome5 name="coins" size={24} color="#fff" />,
    },
    {
      name: 'Depositar',
      icon: () => <Foundation name="bitcoin-circle" size={24} color="#fff" />,
    },
    {
      name: 'Empréstimo',
      icon: () => <Fontisto name="wallet" size={24} color="#fff" />,
    },
    {
      name: 'Cartão virtual',
      icon: () => <Octicons name="credit-card" size={24} color="#fff" />,
    },
    {
      name: 'Recarga de celular',
      icon: () => <SimpleLineIcons name="screen-smartphone" size={24} color="#fff" />,
    },
    {
      name: 'Ajustar limite',
      icon: () => <FontAwesome name="sliders" size={24} color="#fff" />,
    },
    {
      name: 'Bloquear cartão',
      icon: () => <MaterialIcons name="lock-open" size={24} color="#fff" />,
    },
    {
      name: 'Cobrar',
      icon: () => <Feather name="message-circle" size={24} color="#fff" />,
    },
    {
      name: 'Doação',
      icon: () => <FontAwesome5 name="hand-holding-usd" size={24} color="#fff" />,
    },
    {
      name: 'Me ajuda',
      icon: () => <AntDesign name="questioncircleo" size={24} color="#fff" />,
    },
  ]

  return (
    <>
      <Styled.Container>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%' }}>
            <CreditCard />
            <Account />
            <Lending />
            <Rewards />
          </View>
        </ScrollView>
      </Styled.Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Styled.Footer>
          {tabs.map((item, index) => (
            <Tab key={index} first={index === 0} name={item.name} icon={item.icon} />
          ))}
        </Styled.Footer>
      </ScrollView>
    </>
  )
}

export default Home
