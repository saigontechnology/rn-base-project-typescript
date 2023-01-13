import {IApp} from '../../constants/interface/redux/AppInterface'

const getAppData = (state): IApp => {
  return state.app
}

export const getLoadingIndicator = (state): boolean => {
  return getAppData(state).showGlobalIndicator
}
export const getAppStackState = (state): string => {
  return getAppData(state).appState
}
