import {IApp} from '../../constants/interface/redux/AppInterface'

const getAppData = (state): IApp => state.app

export const getLoadingIndicator = state => getAppData(state).showGlobalIndicator
export const getAppStackState = (state): string => getAppData(state).appState
