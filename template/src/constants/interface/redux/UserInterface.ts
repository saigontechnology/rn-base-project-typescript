import {IActionDispatch} from './ActionInterface'

export interface IUserInfo {}

export interface ITokenData {}

export interface IUser {
  userInfo: IUserInfo
  isEndUser?: boolean
  tokenData?: ITokenData
  contentFlagged?: string
}

export interface IUserActions {
  userLogin: IActionDispatch
  userSignUp: IActionDispatch
  logout: IActionDispatch
}
