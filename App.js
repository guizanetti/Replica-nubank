import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#7E19B7' }}>
      <Text>Home Screen</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;