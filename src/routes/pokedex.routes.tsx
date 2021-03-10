import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/Home'
import { IPokemon } from '../types/types'

type StackParamList = {
  Home: undefined
  PokemonInfo: IPokemon
}

const Stack = createStackNavigator<StackParamList>()

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#D53A47',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Pokedex' }}
      />
    </Stack.Navigator>
  )
}
