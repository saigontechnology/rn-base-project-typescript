export interface IHitSlop {
  top?: number
  bottom?: number
  right?: number
  left?: number
}

export interface IActionTypes {
  ORIGIN: string
  HANDLER: string
  SUCCESS: string
  FAILURE: string
}

export interface IRouteKey {
  /** Screen */
  SplashScreen: string
  LoginScreen: string
  SignUpScreen: string
  HomeScreen: string

  /** Stack */
  AuthStack: string
  MainStack: string
  HomeStack: string

  /** Tab */
  MainTab: string
}

export interface IError {
  message: object
  code: number
}
