import {ActionCreatorWithPayload} from '@reduxjs/toolkit'

export interface IApp {
  showGlobalIndicator?: boolean
  appState: string
  showSearchBar?: boolean
  appSettings: {}
}

export interface IAppActions {
  getSettings?: ActionCreatorWithPayload<any>
  setAppStack?: ActionCreatorWithPayload<any>
  getSettingsSuccess?: ActionCreatorWithPayload<any>
  setShowGlobalIndicator?: ActionCreatorWithPayload<any>
  setSettingAppHandle?: ActionCreatorWithPayload<any>
  setSettingAppSuccess?: ActionCreatorWithPayload<any>
  setSettingAppFailure?: ActionCreatorWithPayload<any>
  loginHandle?: ActionCreatorWithPayload<any>
  loginSuccess?: ActionCreatorWithPayload<any>
  loginFailure?: ActionCreatorWithPayload<any>
}
