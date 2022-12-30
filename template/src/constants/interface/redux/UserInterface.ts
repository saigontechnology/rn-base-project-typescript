import {ActionCreatorWithPayload} from '@reduxjs/toolkit'

export interface IUserInfo {}

export interface ITokenData {}

export interface IUser {
  userInfo: IUserInfo
  isEndUser?: boolean
  tokenData?: ITokenData
  contentFlagged?: string
}

export interface IUserActions {
  userLogin: ActionCreatorWithPayload<any>
  userSignUp: ActionCreatorWithPayload<any>
  logout: ActionCreatorWithPayload<any>
  userLoginHandle: ActionCreatorWithPayload<any>
  userLoginSuccess: ActionCreatorWithPayload<any>
  userLoginFailure: ActionCreatorWithPayload<any>
  userSignUpHandle: ActionCreatorWithPayload<any>
  userSignUpSuccess: ActionCreatorWithPayload<any>
  userSignUpFailure: ActionCreatorWithPayload<any>
  userLogoutHandle: ActionCreatorWithPayload<any>
  userLogoutSuccess: ActionCreatorWithPayload<any>
  userLogoutFailure: ActionCreatorWithPayload<any>
  updateUserInfoHandle: ActionCreatorWithPayload<any>
  updateUserInfoSuccess: ActionCreatorWithPayload<any>
  updateUserInfoFailure: ActionCreatorWithPayload<any>
}
