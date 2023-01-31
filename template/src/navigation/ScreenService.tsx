import RouteKey from './RouteKey'
import {LoginScreen, SignUpScreen} from '../screens'
// Screen Import
import HomeScreen from '../screens/HomeComponent/HomeScreen'

export const screenMatch = (screen: string): any => {
  switch (screen) {
    // Screen Match
    case RouteKey.LoginScreen:
      return LoginScreen
    case RouteKey.SignUpScreen:
      return SignUpScreen
    case RouteKey.HomeScreen:
      return HomeScreen
    default:
      return ''
  }
}

export const optionsMatch = (screen: string): any => {
  switch (screen) {
    // Screen Options
    case RouteKey.HomeScreen:
    case RouteKey.HomeStack:
      return {
        headerLeft: null,
      }
    default:
      return {}
  }
}
