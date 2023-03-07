import {IActionDispatch} from './action'

export interface IApp {
  showGlobalIndicator?: boolean
  appState: string
  showSearchBar?: boolean
  codePushKey?: string
  apiUrl?: string
}

export interface IAppActions {
  setSettingAppHandle: IActionDispatch
  setSettingAppSuccess: IActionDispatch
  setSettingAppFailure: IActionDispatch
  loginHandle: IActionDispatch
  loginSuccess: IActionDispatch
  loginFailure: IActionDispatch
  getSettings: IActionDispatch
  getSettingsSuccess: IActionDispatch
  setAppStack: IActionDispatch
  setShowGlobalIndicator: IActionDispatch
  setCodePushKey: IActionDispatch
  setApiUrl: IActionDispatch
}
