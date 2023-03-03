import {ActionCreatorWithoutPayload} from '@reduxjs/toolkit'
import {IActionDispatch} from './action'

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
  logout: ActionCreatorWithoutPayload
  userLoginHandle: IActionDispatch
  userLoginSuccess: IActionDispatch
  userLoginFailure: IActionDispatch
  userSignUpHandle: IActionDispatch
  userSignUpSuccess: IActionDispatch
  userSignUpFailure: IActionDispatch
  userLogoutHandle: IActionDispatch
  userLogoutSuccess: IActionDispatch
  userLogoutFailure: IActionDispatch
  updateUserInfoHandle: IActionDispatch
  updateUserInfoSuccess: IActionDispatch
  updateUserInfoFailure: IActionDispatch
}
