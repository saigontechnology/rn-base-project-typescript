import {ParamListBase} from '@react-navigation/native'
import RouteKey from './RouteKey'

type HomeScreenParams = {
  userId: ''
}
type LoginScreenParams = {}
type SignUpScreenParams = {}

export interface AppStackParamList extends ParamListBase {
  [RouteKey.HomeScreen]: HomeScreenParams
  [RouteKey.LoginScreen]: LoginScreenParams
  [RouteKey.SignUpScreen]: SignUpScreenParams
}

export type IItemTabBar = {
  route: string
  title: string
}
