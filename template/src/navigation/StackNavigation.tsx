import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {LoginScreen, SignUpScreen} from '../screens'
import HomeScreen from '../screens/HomeComponent/HomeScreen'
import RouteKey from './RouteKey'
import {optionsMatch} from './ScreenService'
import {AppStackParamList} from './types'

const Stack = createNativeStackNavigator<AppStackParamList>()

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteKey.HomeScreen}
        component={HomeScreen}
        options={optionsMatch(RouteKey.HomeScreen)}
      />
    </Stack.Navigator>
  )
}

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteKey.LoginScreen}
        component={LoginScreen}
        options={optionsMatch(RouteKey.LoginScreen)}
      />
      <Stack.Screen
        name={RouteKey.SignUpScreen}
        component={SignUpScreen}
        options={optionsMatch(RouteKey.SignUpScreen)}
      />
    </Stack.Navigator>
  )
}
