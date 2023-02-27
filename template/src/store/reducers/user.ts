import {createSlice} from '@reduxjs/toolkit'
import {IUser, IUserActions} from '../../constants/interface/redux/UserInterface'

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
    logout() {
      // TODO: add action when user logout
    },
  },
  extraReducers: builder => {},
})

export const userActions: IUserActions = {
  ...userSlice.actions,
}

export default userSlice.reducer
