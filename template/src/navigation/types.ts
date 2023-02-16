import {ParamListBase} from '@react-navigation/native'

type HomeScreenParams = {}
type LoginScreenParams = {}
type SignUpScreenParams = {}

export interface AppStackParamList extends ParamListBase {
  HomeScreen: HomeScreenParams
  LoginScreen: LoginScreenParams
  SignUpScreen: SignUpScreenParams
}

export type IItemTabBar = {
  route: string
  title: string
}