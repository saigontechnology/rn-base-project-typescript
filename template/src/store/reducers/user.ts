import {createSlice} from '@reduxjs/toolkit'
import {IUser} from '../types'

export const userInitialState: IUser = {
  userInfo: {},
  isEndUser: false,
  tokenData: {},
  contentFlagged: '',
}

export const userSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  reducers: {
    userLogin: () => {
      // TODO: add action when user login
    },
    userSignUp: () => {
      // TODO: add action when user sign up
    },
    logout: () => {
      // TODO: add action when user logout
    },
  },
})

export const userActions = {
  ...userSlice.actions,
}

export default userSlice.reducer
