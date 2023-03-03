import {IActionDispatch} from './action'

export interface IApp {
  showGlobalIndicator?: boolean
  appState: string
  showSearchBar?: boolean
  codePushKey: string
  apiUrl?: string
}

export interface IAppActions {
  getSettings: IActionDispatch
  setAppStack: IActionDispatch
  getSettingsSuccess: IActionDispatch
  setShowGlobalIndicator: IActionDispatch
}
