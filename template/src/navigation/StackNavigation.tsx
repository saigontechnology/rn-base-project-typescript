import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {screenMatch, optionsMatch} from './ScreenService'
import RouteKey from './RouteKey'

export const componentMatch = (stackName: string): Element | string => {
  switch (stackName) {
    case RouteKey.HomeStack:
      return HomeNavigator
    default:
      return ''
  }
}

export type HomeStackParamList = {
  HomeScreen: undefined
}

export type AuthStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
}

export type AppStackParamList = AuthStackParamList & HomeStackParamList

const Stack = createNativeStackNavigator<AppStackParamList>()

interface IProps {}

export const HomeNavigator = (props: IProps) => {
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

export const AuthNavigator = (props: IProps) => {
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

export const MainStackNavigator = (props: IProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // @ts-ignore
        name={RouteKey.HomeStack}
        component={HomeNavigator}
      />
      <Stack.Screen
        // @ts-ignore
        name={RouteKey.AuthStack}
        component={AuthNavigator}
      />
    </Stack.Navigator>
  )
}
