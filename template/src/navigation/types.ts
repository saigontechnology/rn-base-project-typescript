import {ParamListBase} from '@react-navigation/native'
import RouteKey from './RouteKey'

/** Type */
type HomeScreenParams = {
  userId: ''
}
type LoginScreenParams = {}
type SignUpScreenParams = {}

export interface AppStackParamList extends ParamListBase {
  /** Params */
  [RouteKey.HomeScreen]: HomeScreenParams
  [RouteKey.LoginScreen]: LoginScreenParams
  [RouteKey.SignUpScreen]: SignUpScreenParams
}

export type IItemTabBar = {
  route: string
  title: string
}
