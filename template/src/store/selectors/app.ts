import {IApp, IInitialState} from '../types'

const getAppData = (state: IInitialState): IApp => state.app

export const getLoadingIndicator = (state: IInitialState) => getAppData(state).showGlobalIndicator
export const getAppStackState = (state: IInitialState): string => getAppData(state).appState
export const getCodePushKey = (state: IInitialState) => getAppData(state).codePushKey
export const getApiUrl = (state: IInitialState) => getAppData(state).apiUrl || ''
