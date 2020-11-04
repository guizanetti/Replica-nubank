import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import CreditCard from '../screens/CreditCard'
import Account from '../screens/Account'

const Stack = createStackNavigator()

const Navigation = () => {
  const defaultOptions = { headerShown: false, cardStyle: { backgroundColor: '#7E19B7' } }
  const resumeOption = { headerShown: false, cardStyle: { backgroundColor: '#fff' } }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={defaultOptions} name="Home" component={Home} />
        <Stack.Screen options={defaultOptions} name="ResumeCredit" component={CreditCard} />
        <Stack.Screen options={defaultOptions} name="ResumeAccount" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
