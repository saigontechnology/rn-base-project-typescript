import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import RouteKey from '../../navigation/RouteKey'
import {IApp} from '../types/app'

const initialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getSettings: () => {
      // TODO: add action when user get settings
    },
    setAppStack: (state, action: PayloadAction<string>): void => {
      state.appState = action.payload
    },
    setShowGlobalIndicator: (state, action: PayloadAction<boolean>): void => {
      state.showGlobalIndicator = action.payload
    },
  },
})

export const appActions = {
  ...appSlice.actions,
}

export default appSlice.reducer
