import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import RouteKey from '../../navigation/RouteKey'
import {IApp} from '../types/app'
import Config, {CODEPUSH_KEYS} from '../../constants/configs'

const initialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
  codePushKey: CODEPUSH_KEYS[0]?.dev,
  apiUrl: Config.API_URL,
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
    setCodePushKey: (state, action: PayloadAction<string>) => {
      state.codePushKey = action.payload
    },
    setApiUrl: (state, action: PayloadAction<string>) => {
      state.apiUrl = action.payload
    },
  },
})

export const appActions = appSlice.actions

export default appSlice.reducer
