import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import RouteKey from '../../navigation/RouteKey'
import {APP_CONSTANTS_ACTIONS} from '../constants/app'
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
    // TODO: custom any in PayloadAction<any> depend on action type
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.HANDLER]: (state): string => {
      return state.appState
    },
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.SUCCESS]: (state, action: PayloadAction<any>): void => {},
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.FAILURE]: (state, action: PayloadAction<any>): void => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.HANDLER]: (state, action: PayloadAction<any>): void => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.SUCCESS]: (state, action: PayloadAction<any>): void => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.FAILURE]: (state, action: PayloadAction<any>): void => {},
    getSettings: () => {},
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
