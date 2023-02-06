import { ActionCreator, AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_CONSTANTS_ACTIONS } from '../constants/user'
import { IUser, IUserInfo } from '../types'

const initialState: IUser = {
  userInfo: {},
  isEndUser: false,
  tokenData: {},
  contentFlagged: '',
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [USER_CONSTANTS_ACTIONS.USER_LOGIN_ACTIONS.HANDLER]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_LOGIN_ACTIONS.SUCCESS]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_LOGIN_ACTIONS.FAILURE]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_SIGN_UP_ACTIONS.HANDLER]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_SIGN_UP_ACTIONS.SUCCESS]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_SIGN_UP_ACTIONS.FAILURE]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_LOG_OUT_ACTIONS.HANDLER]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_LOG_OUT_ACTIONS.SUCCESS]: () => { },
    [USER_CONSTANTS_ACTIONS.USER_LOG_OUT_ACTIONS.FAILURE]: () => { },
    [USER_CONSTANTS_ACTIONS.UPDATE_USER_INFO_ACTIONS.HANDLER]: () => { },
    [USER_CONSTANTS_ACTIONS.UPDATE_USER_INFO_ACTIONS.SUCCESS]: () => { },
    [USER_CONSTANTS_ACTIONS.UPDATE_USER_INFO_ACTIONS.FAILURE]: () => { },
    userLogin: () => { },
    userSignUp: () => { },
    logout(state) { },
    updateUserInfo(state, action: PayloadAction<IUserInfo>) { },
  },
  extraReducers: builder => { },
})

export const userActions: Record<string, ActionCreator<AnyAction>> = {
  ...userSlice.actions,
  userLoginHandle: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_LOGIN_ACTIONS.HANDLER],
  userLoginSuccess: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_LOGIN_ACTIONS.FAILURE],
  userLoginFailure: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_LOGIN_ACTIONS.SUCCESS],
  userSignUpHandle: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_SIGN_UP_ACTIONS.HANDLER],
  userSignUpSuccess: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_SIGN_UP_ACTIONS.FAILURE],
  userSignUpFailure: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_SIGN_UP_ACTIONS.SUCCESS],
  userLogoutHandle: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_LOG_OUT_ACTIONS.HANDLER],
  userLogoutSuccess: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_LOG_OUT_ACTIONS.FAILURE],
  userLogoutFailure: userSlice.actions[USER_CONSTANTS_ACTIONS.USER_LOG_OUT_ACTIONS.SUCCESS],
  updateUserInfoHandle: userSlice.actions[USER_CONSTANTS_ACTIONS.UPDATE_USER_INFO_ACTIONS.HANDLER],
  updateUserInfoSuccess: userSlice.actions[USER_CONSTANTS_ACTIONS.UPDATE_USER_INFO_ACTIONS.FAILURE],
  updateUserInfoFailure: userSlice.actions[USER_CONSTANTS_ACTIONS.UPDATE_USER_INFO_ACTIONS.SUCCESS],
}

export default userSlice.reducer
