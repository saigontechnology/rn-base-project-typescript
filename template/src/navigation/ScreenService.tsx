import {NativeStackNavigationOptions} from '@react-navigation/native-stack'
import RouteKey from './RouteKey'
import {HomeNavigator} from './StackNavigation'

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
