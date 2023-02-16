import {NativeStackNavigationOptions} from '@react-navigation/native-stack'
import {LoginScreen, SignUpScreen} from '../screens'
import HomeScreen from '../screens/HomeComponent/HomeScreen'
import RouteKey from './RouteKey'
import {HomeNavigator} from './StackNavigation'

export const screenMatch = (screen: string): any => {
  switch (screen) {
    case RouteKey.LoginScreen:
      return LoginScreen
    case RouteKey.SignUpScreen:
      return SignUpScreen
    default:
      return HomeScreen
  }
}

export const optionsMatch = (screen: string): NativeStackNavigationOptions => {
  switch (screen) {
    case RouteKey.HomeScreen:
    case RouteKey.HomeStack:
      return {
        headerLeft: undefined,
      }
    default:
      return {}
  }
}

export const componentMatch = (stackName: string): Element | string => {
  switch (stackName) {
    case RouteKey.HomeStack:
      return HomeNavigator
    default:
      return ''
  }
}