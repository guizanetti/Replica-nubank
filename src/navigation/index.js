import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'

const Stack = createStackNavigator()

const Navigation = () => {
  const defaultOptions = { headerShown: false, cardStyle: { backgroundColor: '#7E19B7' } }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={defaultOptions} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
