import {createSlice} from '@reduxjs/toolkit'
import {IAction} from '../../constants/interface/redux/ActionInterface'
import {IApp, IAppActions} from '../../constants/interface/redux/AppInterface'
import RouteKey from '../../navigation/RouteKey'

const initialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getSettings: (state: IApp, action: IAction): void => {
      // TODO: add action when user get settings
    },
    setAppStack: (state: IApp, action: IAction): void => {
      state.appState = action.payload
    },
    getSettingsSuccess: (state: IApp, action: IAction): void => {
      // TODO: add action when user get settings success
    },
    setShowGlobalIndicator: (state: IApp, action: IAction): void => {
      state.showGlobalIndicator = action.payload
    },
  },
})

export const appActions: IAppActions = {
  ...appSlice.actions,
}

export default appSlice.reducer
