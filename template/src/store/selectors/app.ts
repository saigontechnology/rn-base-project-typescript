import {IApp} from '../../constants/interface/redux/AppInterface'

const getAppData = (state): IApp => state.app

export const getLoadingIndicator = (state): boolean => getAppData(state).showGlobalIndicator
export const getAppStackState = (state): string => getAppData(state).appState
