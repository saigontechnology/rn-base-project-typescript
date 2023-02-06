import { ActionCreator, AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import RouteKey from '../../navigation/RouteKey'
import { APP_CONSTANTS_ACTIONS } from '../constants/app'
import { IApp } from '../types/app'

const initialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // TODO: custom any in PayloadAction<any> depend on action type
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.HANDLER]: (state, action: PayloadAction<any>): void => { },
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.SUCCESS]: (state, action: PayloadAction<any>): void => { },
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.FAILURE]: (state, action: PayloadAction<any>): void => { },
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.HANDLER]: (state, action: PayloadAction<any>): void => { },
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.SUCCESS]: (state, action: PayloadAction<any>): void => { },
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.FAILURE]: (state, action: PayloadAction<any>): void => { },
    getSettings: (state, action: PayloadAction<any>): void => { },
    setAppStack: (state, action: PayloadAction<string>): void => {
      state: state.appState = action.payload
    },
    getSettingsSuccess: (state, action: PayloadAction<any>): void => { },
    setShowGlobalIndicator: (state, action: PayloadAction<boolean>): void => {
      state: state.showGlobalIndicator = action.payload
    },
  },
})

export const appActions: Record<string, ActionCreator<AnyAction>> = {
  ...appSlice.actions,
  setSettingAppHandle: appSlice.actions[APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.HANDLER],
  setSettingAppSuccess: appSlice.actions[APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.SUCCESS],
  setSettingAppFailure: appSlice.actions[APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.FAILURE],
  loginHandle: appSlice.actions[APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.HANDLER],
  loginSuccess: appSlice.actions[APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.SUCCESS],
  loginFailure: appSlice.actions[APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.FAILURE],
}

export default appSlice.reducer
