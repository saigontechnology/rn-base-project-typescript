import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {IUser, IUserInfo} from '../types'

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
    userLogin: () => {
      // TODO: add action when user login
    },
    userSignUp: () => {
      // TODO: add action when user sign up
    },
    logout(state) {
      // TODO: add action when user logout
    },
    updateUserInfo(state, action: PayloadAction<IUserInfo>) {
      // TODO: add action when update user info
    },
  },
  extraReducers: builder => {},
})

export const userActions = {
  ...userSlice.actions,
}

export default userSlice.reducer
