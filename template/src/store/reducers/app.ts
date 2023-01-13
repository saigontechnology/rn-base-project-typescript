/* eslint-disable @typescript-eslint/no-empty-function */
import {createSlice} from '@reduxjs/toolkit'
import {IAction} from '../../constants/interface/redux/ActionInterface'
import {IApp, IAppActions} from '../../constants/interface/redux/AppInterface'
import RouteKey from '../../navigation/RouteKey'
import {APP_CONSTANTS_ACTIONS} from '../constants/app'

const initialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.HANDLER]: (state: IApp, action: IAction): void => {},
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.SUCCESS]: (state: IApp, action: IAction): void => {},
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.FAILURE]: (state: IApp, action: IAction): void => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.HANDLER]: (state: IApp, action: IAction): void => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.SUCCESS]: (state: IApp, action: IAction): void => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.FAILURE]: (state: IApp, action: IAction): void => {},
    getSettings: (state: IApp, action: IAction): void => {},
    setAppStack: (state: IApp, action: IAction): void => {
      state.appState = action.payload
    },
    getSettingsSuccess: (state: IApp, action: IAction): void => {},
    setShowGlobalIndicator: (state: IApp, action: IAction): void => {
      state.showGlobalIndicator = action.payload
    },
  },
})

export const appActions: IAppActions = {
  ...appSlice.actions,
  setSettingAppHandle: appSlice.actions[APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.HANDLER],
  setSettingAppSuccess: appSlice.actions[APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.SUCCESS],
  setSettingAppFailure: appSlice.actions[APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.FAILURE],
  loginHandle: appSlice.actions[APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.HANDLER],
  loginSuccess: appSlice.actions[APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.SUCCESS],
  loginFailure: appSlice.actions[APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.FAILURE],
}

export default appSlice.reducer
