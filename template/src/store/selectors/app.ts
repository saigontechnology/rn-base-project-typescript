import {IApp} from '../../constants/interface/redux/AppInterface'

const getAppData = (state: any): IApp => state.app

export const getLoadingIndicator = (state: any) => getAppData(state).showGlobalIndicator
export const getAppStackState = (state: any): string => getAppData(state).appState
