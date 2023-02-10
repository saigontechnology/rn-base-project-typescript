import {combineReducers} from '@reduxjs/toolkit'
import user, {userInitialState} from './user'
import app, {appInitialState} from './app'
import loading from './loading'
import {persistReducer} from 'redux-persist'
import {MMKVStorage} from '../../services'

export * from './app'
export * from './user'

export const InitialState = {
  user: userInitialState,
  app: appInitialState,
}

export const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  blacklist: Object.keys(InitialState),
}

const userPersistConfig = {
  key: 'user',
  storage: MMKVStorage,
}

export default combineReducers({
  user: persistReducer(userPersistConfig, user),
  app,
  loading,
})
