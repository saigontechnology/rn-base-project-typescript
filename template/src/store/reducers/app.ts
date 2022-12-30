import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IApp, IAppActions} from '../../constants/interface/redux/AppInterface'
import RouteKey from '../../navigation/RouteKey'
import {APP_CONSTANTS_ACTIONS} from '../constants/app'

const initialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
  appSettings: {},
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.HANDLER]: (state): string => {
      return state.appState
    },
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.SUCCESS]: () => {},
    [APP_CONSTANTS_ACTIONS.GET_SETTING_APP_ACTIONS.FAILURE]: () => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.HANDLER]: () => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.SUCCESS]: () => {},
    [APP_CONSTANTS_ACTIONS.LOGIN_ACTIONS.FAILURE]: () => {},
    getSettings: () => {},
    setAppStack: (state, action: PayloadAction<string>) => {
      state: state.appState = action.payload
    },
    setShowGlobalIndicator: (state, action: PayloadAction<boolean>) => {
      state: state.showGlobalIndicator = action.payload
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
