import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import RouteKey from './RouteKey'
import {optionsMatch, screenMatch} from './ScreenService'
import {AppStackParamList} from './types'

export const componentMatch = (stackName: string): Element | string => {
  switch (stackName) {
    case RouteKey.HomeStack:
      return HomeNavigator
    default:
      return ''
  }
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={screenMatch(RouteKey.HomeScreen)}
        options={optionsMatch(RouteKey.HomeScreen)}
      />
    </Stack.Navigator>
  )
}

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'LoginScreen'}
        component={screenMatch(RouteKey.LoginScreen)}
        options={optionsMatch(RouteKey.LoginScreen)}
      />
      <Stack.Screen
        name={'SignUpScreen'}
        component={screenMatch(RouteKey.SignUpScreen)}
        options={optionsMatch(RouteKey.SignUpScreen)}
      />
    </Stack.Navigator>
  )
}
