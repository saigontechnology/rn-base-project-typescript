import {IActionDispatch} from './ActionInterface'

export interface IApp {
  showGlobalIndicator: boolean
  appState: string
  showSearchBar?: boolean
}

export interface IAppActions {
  getSettings: IActionDispatch
  setAppStack: IActionDispatch
  getSettingsSuccess: IActionDispatch
  setShowGlobalIndicator: IActionDispatch
}
